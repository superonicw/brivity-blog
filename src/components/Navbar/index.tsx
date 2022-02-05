import React from 'react'
import { UserProfile } from 'components'
import Logo from 'assets/images/logo.png'

const Navbar: React.FC = () => {
  return (
    <div className="relative bg-sky-500 p-5 ">
      <img src={Logo} alt="logo" className="w-36" />
      <UserProfile />
    </div>
  )
}

export default Navbar
