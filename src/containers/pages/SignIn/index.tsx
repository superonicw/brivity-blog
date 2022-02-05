import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button, Input, Link } from 'designSystem'
import { useAppProvider } from 'store/providers'

const SignInPage: React.FC = () => {
  const { user, onSignIn } = useAppProvider()

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
    <div className="flex flex-col items-center text-center">
      <div className="shadow px-4 pt-8 pb-4 w-96">
        <form onSubmit={handleSubmit(onSignIn)}>
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
                  disabled={user.loading}
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
                  disabled={user.loading}
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
              disabled={user.loading}
              loading={user.loading}
            />
            <Link
              to="/register"
              label="Register"
              className="text-slate-500 text-sm"
              disabled={user.loading}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
