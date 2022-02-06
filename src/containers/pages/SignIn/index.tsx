import { useAppProvider } from 'store/providers'
import { SignInForm } from 'components/Forms'

const SignInPage: React.FC = () => {
  const { user, onSignIn } = useAppProvider()

  return (
    <div className="flex flex-col items-center text-center">
      <div className="shadow px-4 pt-8 pb-4 w-96">
        <SignInForm loading={user.loading} onSubmit={onSignIn} />
      </div>
    </div>
  )
}

export default SignInPage
