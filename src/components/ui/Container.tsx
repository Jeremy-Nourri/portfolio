import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ContainerProps = {
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement>

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-content px-4 md:px-6 lg:px-8',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
