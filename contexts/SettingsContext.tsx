'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'auto' | 'light' | 'dark'
type Font = 'noto-sans' | 'hind-siliguri' | 'atma' | 'galada'

interface Settings {
  theme: Theme
  font: Font
  fontSize: number
}

interface SettingsContextType {
  settings: Settings
  updateSettings: (newSettings: Partial<Settings>) => void
  isSettingsOpen: boolean
  setIsSettingsOpen: (open: boolean) => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider')
  }
  return context
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>({
    theme: 'auto',
    font: 'noto-sans',
    fontSize: 16,
  })
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }

  useEffect(() => {
    if (settings.theme === 'auto') {
      const updateTheme = () => {
        const hour = new Date().getHours()
        const isDark = hour >= 17 || hour < 7 // 5PM to 7AM
        document.documentElement.classList.toggle('dark', isDark)
      }

      updateTheme()
      const interval = setInterval(updateTheme, 60000) // Check every minute

      return () => clearInterval(interval)
    } else {
      document.documentElement.classList.toggle('dark', settings.theme === 'dark')
    }
  }, [settings.theme])

  useEffect(() => {
    document.documentElement.style.fontSize = `${settings.fontSize}px`
  }, [settings.fontSize])

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, isSettingsOpen, setIsSettingsOpen }}>
      {children}
    </SettingsContext.Provider>
  )
}
