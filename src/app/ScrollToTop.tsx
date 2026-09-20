import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (navigationType === 'POP') return

    if (hash) {
      const cible = document.querySelector(hash)
      if (cible) {
        cible.scrollIntoView()
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash, navigationType])

  return null
}
