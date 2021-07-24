import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles'

import Footer from './Footer'
import Header from './Header'

const useStyles = makeStyles(styles)

function Main({ className, children }) {
  const classes = useStyles()

  return (
    <Box className={clsx(className, classes.root)}>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.instanceOf(Object)
}

export default Main
