import React from 'react'
import Head from 'next/head'
import { makeStyles, Typography } from '@material-ui/core'

import Seo from '@components/Seo'

import MainLayout from '@layouts/Main'

import styles from '@styles/about'

const useStyles = makeStyles(styles)

function AboutUs() {
  const classes = useStyles()

  return (
    <MainLayout className={classes.root}>
      <Head>
        <Seo
          title="About Us, Sweet About Us"
          description="About Us, Sweet About Us Description"
        />
      </Head>

      <Typography variant="h1">About Us</Typography>
    </MainLayout>
  )
}

export default AboutUs
