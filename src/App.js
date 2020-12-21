import React, { lazy } from 'react'
import { hot } from 'react-hot-loader'
import { PrivateRoute, PublicRoute } from '@helpers'
import { Switch, Route } from 'react-router-dom'
import { routes } from './routes'
import LayoutDesign from '@layouts'
import { Loading } from '@components'
import { useAuth } from '@contexts'

function App() {
  const { currentUser, isAuth } = useAuth()

  return (
    <Switch>
      {routes &&
        routes.map((route, i) => {
          const LazyComponent = lazy(() => {
            return new Promise(resolve => {
              setTimeout(
                () => resolve(import(`@pages/${route.component}/index.js`)),
                500
              )
            })
          })
          switch (route.status) {
            case 'public':
              return (
                <PublicRoute key={i} {...route}>
                  <LazyComponent />
                </PublicRoute>
              )
            case 'private':
              return (
                <PrivateRoute key={i} {...route}>
                  <LayoutDesign {...route}>
                    <LazyComponent {...route} />
                  </LayoutDesign>
                </PrivateRoute>
              )
            default:
              return (
                <Route key={i} {...route}>
                  <LazyComponent />
                </Route>
              )
          }
        })}
    </Switch>
  )
}

export default hot(module)(App)
