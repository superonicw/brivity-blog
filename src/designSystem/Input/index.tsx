import classNames from 'classnames'

export interface InputProps {
  type?: 'email' | 'text' | 'password' | 'textarea'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  placeholder?: string
  disabled?: boolean
  error?: string | boolean
  onClick?: () => void
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  size = 'md',
  className,
  placeholder = '',
  disabled = false,
  error = '',
  ...rest
}) => {
  const elemProps = {
    type,
    placeholder,
    disabled,
    className: classNames(
      'border rounded outline-none p-2 w-full',
      {
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
        'border-red-500 text-red-500': !!error,
        'focus:border-blue-500': !error,
      },
      className,
    ),
    ...rest,
  }

  return (
    <>
      {type === 'textarea' ? (
        <textarea {...elemProps} />
      ) : (
        <input {...elemProps} />
      )}
      {error && (
        <div className="text-left text-sm pl-2 mt text-red-500">{error}</div>
      )}
    </>
  )
}
