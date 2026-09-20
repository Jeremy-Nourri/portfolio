import {
  type ButtonHTMLAttributes,
  forwardRef,
  type ReactNode,
} from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-button px-5 py-2.5 text-sm font-medium transition-all duration-layout focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-on-accent shadow-glow-sm hover:bg-accent/90 hover:shadow-glow active:scale-[0.98]',
  secondary:
    'border border-accent bg-transparent text-accent hover:bg-surface hover:shadow-glow-sm',
  ghost:
    'bg-transparent text-content-primary hover:bg-surface-elevated/80',
}

type ButtonProps = {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = 'primary', className, children, type = 'button', ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonBase, variantClasses[variant], className)}
        {...props}
      >
        {children}
      </button>
    )
  },
)

type ButtonLinkProps = {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
} & LinkProps

export function ButtonLink({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonBase, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Link>
  )
}
