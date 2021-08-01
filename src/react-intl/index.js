import { useContext } from 'react'

import { IntlContext } from '@contexts/intl'

import replace from 'react-string-replace'

const reg = /\{([a-z|A-Z|0-9|.]+)\}/g

export const formatMessageWithParams = (message, replacements) => {
  const output = replace(message, reg, (prop) => replacements[prop])

  return output
}

export const useIntl = () => {
  const { messages = {}, lang, setLang } = useContext(IntlContext)

  const setLanguage = (nextLocale) => {
    setLang(nextLocale)
  }

  return {
    messages,
    formatMessageWithParams,
    setLanguage,
    lang
  }
}
