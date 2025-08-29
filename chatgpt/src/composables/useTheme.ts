const STORAGE_KEY = 'olinto-theme'

export type Theme = 'dark' | 'light'

export function getSystemPref(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function loadTheme(): Theme {
  return (localStorage.getItem(STORAGE_KEY) as Theme) || getSystemPref() || 'dark'
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
}

export function toggleTheme(): Theme {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  const next = current === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  localStorage.setItem(STORAGE_KEY, next)
  return next
}

// initialize on import
applyTheme(loadTheme())
