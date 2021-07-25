import { useContext } from 'react'

import { WHITE, BLACK } from '@constants/themes'

import { ThemeContext } from '@contexts/theme'

const useThemeContext = () => {
  const { setTheme, theme } = useContext(ThemeContext)

  const setWhiteTheme = () => {
    setTheme(WHITE)
  }

  const setBlackTheme = () => {
    setTheme(BLACK)
  }

  return {
    setWhiteTheme,
    setBlackTheme,
    theme
  }
}

export default useThemeContext
