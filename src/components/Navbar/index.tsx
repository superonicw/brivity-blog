import { Link } from 'react-router-dom'
import { UserProfile } from 'components'
import Logo from 'assets/images/logo.png'

const Navbar: React.FC = () => (
  <div className="relative bg-sky-500 p-5 ">
    <Link to="/">
      <img src={Logo} alt="logo" className="w-36" />
    </Link>
    <UserProfile />
  </div>
)

export default Navbar
