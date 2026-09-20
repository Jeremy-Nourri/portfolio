import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'

export type SubNavItem = {
  to: string
  label: string
}

export function SubNav({
  items,
  label,
  className,
}: {
  items: SubNavItem[]
  label: string
  className?: string
}) {
  return (
    <nav
      aria-label={label}
      className={cn(
        '-mx-4 mb-10 overflow-x-auto border-b border-surface-elevated/70 bg-surface/50 px-4 py-2 md:mx-0 md:rounded-card md:border md:px-3',
        className,
      )}
    >
      <ul className="flex w-max gap-1 md:w-auto md:flex-wrap">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'block whitespace-nowrap rounded-button px-3 py-1.5 text-sm transition-colors duration-layout',
                  isActive
                    ? 'bg-surface-elevated font-medium text-accent'
                    : 'text-content-secondary hover:bg-surface-elevated/60 hover:text-content-primary',
                )
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
