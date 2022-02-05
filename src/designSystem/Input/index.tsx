import classNames from 'classnames'

export interface InputProps {
  type?: 'email' | 'text' | 'password'
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
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(
        'border rounded outline-none p-2 w-full',
        {
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
          'border-red-500 text-red-500': !!error,
          'focus:border-blue-500': !error,
        },
        className,
      )}
      disabled={disabled}
      {...rest}
    />
    {error && (
      <div className="text-left text-sm pl-2 mt text-red-500">{error}</div>
    )}
  </>
)
