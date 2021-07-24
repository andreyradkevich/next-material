import React, { useCallback, useState } from 'react'
import Head from 'next/head'
import { makeStyles, Typography } from '@material-ui/core'

import { useThemeContext, useMountEffect, useRequest } from '@hooks'

import Seo from '@components/Seo'
import Button from '@components/Button'

import MainLayout from '@layouts/Main'

import styles from './styles'

const useStyles = makeStyles(styles)

function Home() {
  const classes = useStyles()

  const [activity, setActivity] = useState()

  const { setWhiteTheme, setBlackTheme } = useThemeContext()
  const { get } = useRequest()

  const setActivityAction = useCallback(
    () =>
      get('activity').then((data) => {
        setActivity(data.activity)
      }),
    [get]
  )

  useMountEffect(() => {
    setActivityAction()
  })

  return (
    <MainLayout className={classes.root}>
      <Head>
        <Seo
          title="Home, Sweet Home"
          description="Home, Sweet Home Description"
        />
      </Head>

      <Typography variant="h1">{activity}</Typography>

      <Button onClick={setWhiteTheme} className={classes.button}>
        Set white theme
      </Button>

      <Button onClick={setBlackTheme} className={classes.button}>
        Set black theme
      </Button>
      <Button onClick={setActivityAction} className={classes.button}>
        Set new activity
      </Button>
    </MainLayout>
  )
}

export default Home
