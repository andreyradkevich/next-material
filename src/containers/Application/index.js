import React, { useState } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { IntlContext } from '@contexts/intl'
import { ThemeContext } from '@contexts/theme'

import { blackTheme, whiteTheme } from '@themes'

import { WHITE, BLACK } from '@constants/themes'
import { EN, RU } from '@constants/languages'

import en from '@locales/en.json'
import ru from '@locales/ru.json'

const messages = {
  [EN]: en,
  [RU]: ru
}

function Application({ pageProps, Component }) {
  const [theme, setTheme] = useState(WHITE)
  const [lang, setLanguage] = useState(EN)

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

  return (
    <MuiThemeProvider theme={themesObject[theme]}>
      <ThemeContext.Provider value={{ setWhiteTheme, setBlackTheme, theme }}>
        <IntlContext.Provider
          value={{
            messages: messages[lang],
            setLanguage,
            lang
          }}
        >
          <Component {...pageProps} />
        </IntlContext.Provider>
      </ThemeContext.Provider>
    </MuiThemeProvider>
  )
}

Application.propTypes = {
  Component: PropTypes.instanceOf(Object),
  pageProps: PropTypes.instanceOf(Object)
}

export default Application
