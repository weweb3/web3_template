import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType | undefined>()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!theme) {
      const t = localStorage.getItem('theme') ?? ''
      setTheme(themes.includes(t) ? t : 'dark')
      return
    }
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return {
    theme,
    setTheme,
  }
}

export const themes = ['light', 'dark']
type ThemeType = typeof themes[number]
