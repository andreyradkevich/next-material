import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

import LangSwitcher from '@components/LangSwitcher'

import styles from './styles'

const useStyles = makeStyles(styles)

const Header = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <LangSwitcher />
    </Box>
  )
}

export default Header
