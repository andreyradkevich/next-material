import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

import LinkList from '@components/Link/List'

import styles from './styles'

const useStyles = makeStyles(styles)

function Footer() {
  const classes = useStyles()

  const list = [
    {
      href: '/',
      text: 'Home'
    },
    {
      href: '/about',
      text: 'About Us'
    }
  ]

  return (
    <Box className={classes.root}>
      <LinkList list={list} />
    </Box>
  )
}

export default Footer
