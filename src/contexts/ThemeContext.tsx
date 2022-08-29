import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { defaultTheme } from '../styles/themes/default'
import { lightTheme } from '../styles/themes/light'

type Theme = {
  title: string
  colors: {
    'base-background': string
    'base-brand-100': string
    'base-brand-200': string
    'base-text': string
    'base-text-selected': string
    'base-text-subtitle': string
    'base-input-bg': string
    'base-input-search': string
    'base-icon': string
    'base-theme-button': string
    'base-theme-icon': string
  }
}

type ThemeContextData = {
  theme: Theme
  changeTheme: () => void
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
)

interface ThemeContextProviderProps {
  children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(() => {
    const storagedTheme = localStorage.getItem('@modgallery:theme')

    if (storagedTheme) {
      return JSON.parse(storagedTheme)
    } else {
      return defaultTheme
    }
  })

  const changeTheme = useCallback(() => {
    setTheme(theme.title === 'default' ? lightTheme : defaultTheme)
  }, [theme.title])

  useEffect(() => {
    localStorage.setItem('@modgallery:theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
