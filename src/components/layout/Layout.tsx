import { Outlet } from 'react-router-dom'
import { ScrollToTop } from '@/app/ScrollToTop'
import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { SiteHeader } from '@/components/layout/SiteHeader'

export function Layout() {
  return (
    <div className="relative isolate flex min-h-svh flex-col">
      <ScrollToTop />
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-button focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Aller au contenu principal
      </a>
      <AmbientBackground />
      <SiteHeader />
      <main
        id="contenu-principal"
        className="relative z-20 flex-1"
        tabIndex={-1}
      >
        <Outlet />
      </main>
    </div>
  )
}
