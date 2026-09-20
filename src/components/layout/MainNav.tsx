import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'

export type NavItem = {
  to: string
  label: string
  end?: boolean
}

const items: NavItem[] = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/presentation', label: 'Présentation' },
  { to: '/competences', label: 'Compétences' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/parcours', label: 'Parcours' },
  { to: '/contact', label: 'Contact' },
]

export function MainNav() {
  return (
    <nav aria-label="Navigation principale" className="flex flex-wrap gap-x-1 gap-y-2">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            cn(
              'rounded-button px-3 py-2 text-sm font-medium transition-colors duration-layout',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
              isActive
                ? 'bg-surface-elevated text-accent'
                : 'text-content-secondary hover:bg-surface-elevated/60 hover:text-content-primary',
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
