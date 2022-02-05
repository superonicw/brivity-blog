import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from 'assets/images/logo.png'

const AuthLayout: React.FC = () => (
  <div className="container mx-auto">
    <div className="flex flex-col items-center justify-center pt-20">
      <Link to="/">
        <img src={Logo} alt="Brivity" className="w-36 mb-6" />
      </Link>
      <Outlet />
    </div>
  </div>
)

export default AuthLayout
