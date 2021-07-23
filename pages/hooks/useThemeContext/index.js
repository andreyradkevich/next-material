import { useContext } from 'react'

import { ThemeContext } from '@contexts/theme'

const useThemeContext = () => {
  const { setWhiteTheme, setBlackTheme, theme } = useContext(ThemeContext)

  return {
    setWhiteTheme,
    setBlackTheme,
    theme
  }
}

export default useThemeContext
