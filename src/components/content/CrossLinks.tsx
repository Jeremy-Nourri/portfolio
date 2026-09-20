import { Link } from 'react-router-dom'

import { accentStyles, type AccentName } from '@/lib/accents'

export type CrossLink = {
  to: string
  title: string
  note?: string
  accent?: AccentName
}

export function CrossLinks({
  title,
  intro,
  links,
}: {
  title: string
  intro?: string
  links: CrossLink[]
}) {
  if (links.length === 0) return null

  return (
    <section className="mt-16 border-t border-surface-elevated/80 pt-8">
      <h2 className="mb-2 text-lg md:text-xl">{title}</h2>
      {intro ? <p className="mb-6 text-sm text-content-secondary">{intro}</p> : null}
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`group flex h-full flex-col rounded-card border border-surface-elevated/90 bg-surface/70 p-4 no-underline transition-all duration-layout hover:bg-surface ${accentStyles[link.accent ?? 'cyan'].ring}`}
            >
              <span className="flex items-center gap-2 text-sm font-medium text-content-primary">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${accentStyles[link.accent ?? 'cyan'].dot}`}
                  aria-hidden
                />
                {link.title}
              </span>
              {link.note ? (
                <span className="mt-1 pl-3.5 text-sm text-content-secondary">
                  {link.note}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
