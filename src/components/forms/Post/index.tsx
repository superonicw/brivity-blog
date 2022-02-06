import { Controller, useForm } from 'react-hook-form'
import { Alert, Button, Input } from 'designSystem'
import { Post } from 'config/types'

interface PostFormProps {
  loading: boolean
  error: string
  defaultValues: Post | null
  onSubmit: (payload: any) => void
}

const PostForm: React.FC<PostFormProps> = ({
  defaultValues,
  loading,
  error,
  onSubmit,
}) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: defaultValues || {
      title: '',
      body: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-semibold text-xl mb-4">
        {defaultValues ? 'Edit this post' : 'Create a new post'}
      </h2>

      {error && <Alert message={error} className="mb-4" />}

      <div>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              className="border rounded outline-none p-2 w-full"
              placeholder="Title"
              disabled={loading}
              error={errors.title && 'Required'}
            />
          )}
        />
      </div>

      <div className="mt-4">
        <Controller
          name="body"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              type="textarea"
              className="border rounded outline-none p-2 w-full"
              placeholder="Body"
              disabled={loading}
              error={errors.body && 'Required'}
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
      </div>
    </form>
  )
}

export default PostForm
