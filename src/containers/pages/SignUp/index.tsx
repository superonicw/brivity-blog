import { useAppProvider } from 'store/providers'
import { SignUpForm } from 'components/Forms'

const SignUpPage: React.FC = () => {
  const { user, onSignUp } = useAppProvider()

  return (
    <div className="flex flex-col items-center text-center">
      <div className="shadow px-4 pt-8 pb-4 w-96">
        <SignUpForm loading={user.loading} onSubmit={onSignUp} />
      </div>
    </div>
  )
}

export default SignUpPage
