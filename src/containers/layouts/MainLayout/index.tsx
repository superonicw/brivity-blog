import { Outlet } from 'react-router-dom'
import { Navbar } from 'components'

const MainLayout: React.FC = () => (
  <>
    <Navbar />
    <div className="container mx-auto py-16 px-12">
      <Outlet />
    </div>
  </>
)

export default MainLayout
