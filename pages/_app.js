import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { MuiThemeProvider } from '@material-ui/core/styles'

import { ThemeContext } from '@contexts/theme'

import { blackTheme, whiteTheme } from '@themes'

import { WHITE, BLACK } from '@constants/themes'

import '@globalStyles/globals.css'

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(WHITE)

  const themesObject = {
    [WHITE]: whiteTheme,
    [BLACK]: blackTheme
  }

  const setWhiteTheme = () => {
    setTheme(WHITE)
  }

  const setBlackTheme = () => {
    setTheme(BLACK)
  }

  useEffect(() => {
    const jssStyles = document && document.getElementById('ssr')

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <MuiThemeProvider theme={themesObject[theme]}>
      <ThemeContext.Provider value={{ setWhiteTheme, setBlackTheme, theme }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </MuiThemeProvider>
  )
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object),
  pageProps: PropTypes.instanceOf(Object)
}

export default App
