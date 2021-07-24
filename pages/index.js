import React, { useCallback, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { useIntl } from 'react-intl'

import { useThemeContext, useMountEffect, useRequest } from '@hooks'

import Seo from '@components/Seo'
import Button from '@components/Button'

import MainLayout from '@layouts/Main'

import styles from '@styles/home'

const useStyles = makeStyles(styles)

function Home() {
  const classes = useStyles()

  const [activity, setActivity] = useState()

  const { setWhiteTheme, setBlackTheme } = useThemeContext()
  const { get } = useRequest()
  const { messages } = useIntl()

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
      <Seo
        title={messages.seoHomePageTitle}
        description={messages.seoHomePageDescription}
      />

      <Typography variant="h1">{activity}</Typography>

      <Button onClick={setWhiteTheme} className={classes.button}>
        {messages.setWhiteTheme}
      </Button>

      <Button onClick={setBlackTheme} className={classes.button}>
        {messages.setBlackTheme}
      </Button>
      <Button onClick={setActivityAction} className={classes.button}>
        {messages.setNewActivity}
      </Button>
    </MainLayout>
  )
}

export default Home
