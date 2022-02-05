import { Navbar } from 'components'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => (
  <>
    <Navbar />
    <div className="container mx-auto py-16 px-12">
      <Outlet />
    </div>
  </>
)

export default MainLayout
