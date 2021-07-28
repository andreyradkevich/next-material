import React from 'react'
import PropTypes from 'prop-types'

import Application from '@containers/Application'

import '@globalStyles/globals.css'

function App({ Component, pageProps, ...restProps }) {
  return (
    <Application lang={restProps.router.locale}>
      <Component {...pageProps} />
    </Application>
  )
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object),
  pageProps: PropTypes.instanceOf(Object)
}

export default App
