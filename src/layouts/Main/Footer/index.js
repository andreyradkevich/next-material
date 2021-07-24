import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import { useIntl } from 'react-intl'

import LinkList from '@components/Link/List'

import styles from './styles'

const useStyles = makeStyles(styles)

function Footer() {
  const classes = useStyles()

  const { messages } = useIntl()

  const list = [
    {
      href: '/',
      text: messages.home
    },
    {
      href: '/about',
      text: messages.aboutUs
    }
  ]

  return (
    <Box className={classes.root}>
      <LinkList list={list} />
    </Box>
  )
}

export default Footer
