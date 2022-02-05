import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppProvider } from 'store/providers'

export interface WithAuthProps {
  children: JSX.Element
  authorized: boolean
}

export const AuthWrapper = ({ children, authorized }: WithAuthProps) => {
  const { user } = useAppProvider()
  const location = useLocation()

  if (authorized && !user.profile) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (!authorized && user.profile) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export const withAuth = (component: JSX.Element, authorized: boolean) => (
  <AuthWrapper authorized={authorized}>{component}</AuthWrapper>
)
