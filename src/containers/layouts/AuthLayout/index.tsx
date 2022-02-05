import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from 'assets/images/logo.png'

const AuthLayout: React.FC = () => (
  <div className="container mx-auto">
    <div className="flex flex-col items-center justify-center pt-20">
      <img src={Logo} alt="Brivity" className="w-36 mb-6" />
      <Outlet />
    </div>
  </div>
)

export default AuthLayout
