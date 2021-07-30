import { useContext } from 'react'
import { useRouter } from 'next/router'

import { IntlContext } from '@contexts/intl'

import replace from 'react-string-replace'

const reg = /\{([a-z|A-Z|0-9|.]+)\}/g

export const formatMessageWithParams = (message, replacements) => {
  const output = replace(message, reg, (prop) => replacements[prop])

  return output
}

export const useIntl = () => {
  const router = useRouter()

  const { pathname } = router

  const { messages = {}, lang } = useContext(IntlContext)

  const setLanguage = (nextLocale) => {
    router.push(`/${nextLocale}${pathname}`, undefined, {
      locale: false
    })
  }

  return {
    messages,
    formatMessageWithParams,
    setLanguage,
    lang
  }
}
