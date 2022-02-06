import { Controller, useForm } from 'react-hook-form'
import { Button, Input, Link } from 'designSystem'

interface SignInFormProps {
  loading: boolean
  onSubmit: (payoad: any) => void
}

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit, loading }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-semibold text-xl">Sign In</h2>

      <div className="mt-8">
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              className="border rounded outline-none p-2 w-full"
              placeholder="Email"
              disabled={loading}
              error={errors.email && 'Required'}
            />
          )}
        />
      </div>

      <div className="mt-4">
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              className="border rounded outline-none p-2 w-full"
              placeholder="Password"
              disabled={loading}
              error={errors.password && 'Required'}
            />
          )}
        />
      </div>

      <div className="flex items-center justify-end gap-4 mt-4">
        <Button
          type="submit"
          label="Submit"
          size="sm"
          disabled={loading}
          loading={loading}
        />
        <Link
          to="/register"
          label="Register"
          className="text-slate-500 text-sm"
          disabled={loading}
        />
      </div>
    </form>
  )
}

export default SignInForm
