import { useState } from 'react'
import { useAppProvider } from 'store/providers'
import { Button, Link } from 'designSystem'

const UserProfile: React.FC = () => {
  const { user, onSignOut } = useAppProvider()

  const [showMenu, setShowMenu] = useState<boolean>(false)

  if (!user.profile) {
    return (
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white">
        <Link label="Log In" to="/login" />
      </div>
    )
  }

  const toggleMenu = () => setShowMenu(prevState => !prevState)

  return (
    <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white">
      <Link label={user.profile.display_name} onClick={toggleMenu} />
      {showMenu && (
        <div className="bg-white text-sky-500 absolute right-0 top-full shadow-lg rounded-md mt-2 p-2">
          <Button theme="secondary" label="Log out" onClick={onSignOut} />
        </div>
      )}
    </div>
  )
}

export default UserProfile
