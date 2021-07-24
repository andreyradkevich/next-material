import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { useIntl } from 'react-intl'

import Seo from '@components/Seo'

import MainLayout from '@layouts/Main'

import styles from '@styles/about'

const useStyles = makeStyles(styles)

function AboutUs() {
  const classes = useStyles()

  const { messages } = useIntl()

  return (
    <MainLayout className={classes.root}>
      <Seo
        title={messages.seoAboutUsPageTitle}
        description={messages.seoAboutUsPageDescription}
      />

      <Typography variant="h1">{messages.aboutUs}</Typography>
    </MainLayout>
  )
}

export default AboutUs
