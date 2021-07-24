import React from 'react'
import PropTypes from 'prop-types'

import Application from '@containers/Application'

import '@globalStyles/globals.css'

function App({ Component, pageProps }) {
  return (
    <Application>
      <Component pageProps={pageProps} />
    </Application>
  )
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object),
  pageProps: PropTypes.instanceOf(Object)
}

export default App
