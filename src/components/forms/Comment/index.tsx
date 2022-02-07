import { Controller, useForm } from 'react-hook-form'
import { Alert, Button, Input } from 'designSystem'
import { Comment } from 'config/types'

interface CommentFormProps {
  loading: boolean
  error: string
  defaultValues: Comment | null
  onSubmit: (payload: any) => void
}

const CommentForm: React.FC<CommentFormProps> = ({
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
      content: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-semibold text-xl mb-4">
        {defaultValues ? 'Edit this comment' : 'Leave a new coment'}
      </h2>

      {error && <Alert message={error} className="mb-4" />}

      <div>
        <Controller
          name="content"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              type="textarea"
              className="border rounded outline-none p-2 w-full"
              placeholder="Content"
              disabled={loading}
              error={errors.content && 'Required'}
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

export default CommentForm
