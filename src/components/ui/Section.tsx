import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SectionProps = {
  children: ReactNode
  className?: string
  title?: string
  id?: string
} & HTMLAttributes<HTMLElement>

export function Section({
  children,
  className,
  title,
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-12 md:py-16 lg:py-20', className)}
      {...props}
    >
      {title ? (
        <header className="mb-8 md:mb-10">
          <h2>{title}</h2>
        </header>
      ) : null}
      {children}
    </section>
  )
}
