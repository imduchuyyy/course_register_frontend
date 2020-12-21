import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useAuth } from '@contexts'

export function PublicRoute({ children, ...rest }) {
  const { isAuth, logout } = useAuth()
  const location = useLocation()

  return <Route {...rest}>{children}</Route>
}
