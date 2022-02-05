import { Navbar } from 'components'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => (
  <div>
    <Navbar />
    <div className="container mx-auto pt-8">
      <Outlet />
    </div>
  </div>
)

export default MainLayout
