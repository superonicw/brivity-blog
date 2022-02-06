import classNames from 'classnames'

export interface AlertProps {
  type?: 'danger' | 'info' | 'warning'
  message: string
  className?: string
}

export const Alert: React.FC<AlertProps> = ({
  type = 'danger',
  message,
  className,
}) => (
  <div
    className={classNames(
      'border border-solid bg-opacity-25 rounded p-2',
      {
        'border-red-300 bg-red-300 text-red-700': type === 'danger',
        'border-green-300 bg-green-300 text-green-700': type === 'info',
        'border-orange-300 bg-orange-300 text-orange-700': type === 'warning',
      },
      className,
    )}
  >
    {message}
  </div>
)
