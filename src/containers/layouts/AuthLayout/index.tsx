import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout: React.FC = () => {
  return (
    <div>
      AuthLayotu <Outlet />
    </div>
  )
}

export default AuthLayout
