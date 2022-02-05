import { Spinner } from 'designSystem'
import classNames from 'classnames'

export interface ButtonProps {
  type?: 'button' | 'submit'
  theme?: 'primary' | 'secondary'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
  loading?: boolean
  disabled?: boolean
  label: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  theme = 'primary',
  size = 'md',
  className,
  disabled = false,
  loading = false,
  label,
  ...rest
}) => (
  <button
    type={type}
    className={classNames(
      'relative rounded px-4 py-2 min-w-max',
      {
        'text-xs': size === 'xs',
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
        'bg-sky-500 text-white': theme === 'primary',
        'hover:bg-sky-600': theme === 'primary' && !disabled,
        'bg-slate-100 text-slate-900 ': theme === 'secondary',
        'hover:bg-slate-200': theme === 'secondary' && !disabled,
        'cursor-not-allowed': disabled || loading,
      },
      className,
    )}
    disabled={disabled || loading}
    {...rest}
  >
    <span
      className={classNames({
        'opacity-0': loading,
        'opacity-20': !loading && disabled,
      })}
    >
      {label}
    </span>
    {loading && (
      <Spinner className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    )}
  </button>
)
