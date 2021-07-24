import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles'

import Footer from './Footer'

const useStyles = makeStyles(styles)

function Main({ className, children }) {
  const classes = useStyles()

  return (
    <Box className={clsx(className, classes.root)}>
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
