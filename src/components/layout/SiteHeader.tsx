import { Link } from 'react-router-dom'
import { getFullName, getInitials, site } from '@/config/site'
import { MainNav } from '@/components/layout/MainNav'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-elevated/60 bg-background/65 shadow-header backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-3 rounded-button p-1 text-left outline-none ring-offset-background transition hover:bg-surface/50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {site.avatarSrc ? (
            <img
              src={site.avatarSrc}
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full border border-surface-elevated object-cover"
            />
          ) : (
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-surface-elevated bg-surface text-sm font-semibold text-content-secondary"
              aria-hidden
            >
              {getInitials()}
            </span>
          )}
          <span className="min-w-0">
            <span className="block truncate font-title text-base font-semibold text-content-primary">
              {getFullName()}
            </span>
            <span className="block truncate text-sm text-content-secondary">
              Portfolio
            </span>
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <MainNav />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
