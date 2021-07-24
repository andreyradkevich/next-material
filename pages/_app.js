import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Application from '@containers/Application'

import '@globalStyles/globals.css'

function App({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document && document.getElementById('ssr')

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <Application pageProps={pageProps}>
      <Component />
    </Application>
  )
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object),
  pageProps: PropTypes.instanceOf(Object)
}

export default App
