import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useAuth } from '@contexts'
import { Loading } from '@components'
import { notification } from 'antd'

export function PrivateRoute({ children, ...rest }) {
  const { isAuth, currentUser } = useAuth()
  const { role } = rest
  const location = useLocation()

  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location }
        }}
      />
    )
  }

  if (!currentUser) {
    return <Loading></Loading>
  }

  if (role.indexOf(currentUser.USER_ROLE.toLowerCase()) != -1) {
    return <Route {...rest}>{children}</Route>
  } else {
    notification.error({
      message: 'You don"t have permission to view this page',
      placement: 'bottomRight'
    })
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location }
        }}
      />
    )
  }
}
