import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
  bare?: boolean
} & HTMLAttributes<HTMLDivElement>

export function Card({ children, className, bare = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-surface-elevated/90 bg-surface/90 shadow-none backdrop-blur-[2px] transition-all duration-layout',
        bare ? '' : 'p-6',
        'hover:-translate-y-1 hover:border-accent/35 hover:bg-surface hover:shadow-glow-sm',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
