import React, { useState } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { IntlContext } from '@contexts/intl'
import { ThemeContext } from '@contexts/theme'

import { blackTheme, whiteTheme } from '@themes'

import { WHITE, BLACK } from '@constants/themes'
import { EN, RU, DEFAULT_LANGUAGE } from '@constants/languages'

import en from '@locales/en.json'
import ru from '@locales/ru.json'

const messages = {
  [EN]: en,
  [RU]: ru
}

function Application({ children }) {
  const [theme, setTheme] = useState(WHITE)
  const [lang, setLang] = useState(DEFAULT_LANGUAGE)

  const themesObject = {
    [WHITE]: whiteTheme,
    [BLACK]: blackTheme
  }

  return (
    <MuiThemeProvider theme={themesObject[theme]}>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <IntlContext.Provider
          value={{
            messages: messages[lang],
            lang,
            setLang
          }}
        >
          {children}
        </IntlContext.Provider>
      </ThemeContext.Provider>
    </MuiThemeProvider>
  )
}

Application.propTypes = {
  children: PropTypes.instanceOf(Object)
}

export default Application
