import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  ThemeContext,
  THEME_STORAGE_KEY,
  type Theme,
} from '@/theme/theme-context'

function readStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyThemeClass(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme())

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  useEffect(() => {
    applyThemeClass(theme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {}
  }, [theme])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}
