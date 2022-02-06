import { Link as RouterLink } from 'react-router-dom'
import classNames from 'classnames'

export interface LinkProps {
  to?: string
  label: string
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export const Link: React.FC<LinkProps> = ({
  to,
  label,
  className,
  disabled = false,
  onClick,
}) => {
  if ((!to && !onClick) || (to && onClick)) {
    return null
  }

  const cn = classNames(
    'underline',
    { 'opacity-30 cursor-not-allowed': disabled, 'cursor-pointer': !disabled },
    className,
  )

  if (disabled) {
    return <span className={cn}>{label}</span>
  }

  if (to) {
    return (
      <RouterLink to={to} className={cn}>
        {label}
      </RouterLink>
    )
  }

  return (
    <span className={cn} role="button" onClick={onClick}>
      {label}
    </span>
  )
}
