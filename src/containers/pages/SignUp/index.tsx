import React from 'react'
import { Link } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { API_CONFIG } from 'config/api'
import { Button, Input } from 'designSystem'
import { apiRequest } from 'utils'

const SignIn: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      display_name: '',
    },
  })

  const onSubmit = (values: any) => {
    apiRequest(API_CONFIG.signUp(values)).then(data => {
      console.log(data)
    })
  }

  return (
    <div className="flex flex-col items-center text-center">
      <div className="shadow px-4 pt-8 pb-4 w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="font-semibold text-xl">Sign Up</h2>

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
                  error={errors.email?.type === 'required' && 'Required'}
                />
              )}
            />
          </div>

          <div className="mt-4">
            <Controller
              name="display_name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  className="border rounded outline-none p-2 w-full"
                  placeholder="Display Name"
                  error={errors.display_name?.type === 'required' && 'Required'}
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
                  error={errors.email?.type === 'required' && 'Required'}
                />
              )}
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button type="submit" label="Submit" size="sm" />
            <Link to="/login">
              <Button label="Sign In" size="sm" theme="secondary" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
