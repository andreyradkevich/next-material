import React, { useCallback, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { getActivity } from '@actions/activity'

import { useThemeContext } from '@hooks'

import Seo from '@components/Seo'
import Button from '@components/Button'

import MainLayout from '@layouts/Main'

import styles from '@styles/home'

const useStyles = makeStyles(styles)

export async function getStaticProps() {
  return {
    props: {
      ssrActivity: await getActivity()
    }
  }
}

function Home({ ssrActivity = {} }) {
  const classes = useStyles()

  const [activity, setActivity] = useState(ssrActivity.activity)

  const { setWhiteTheme, setBlackTheme } = useThemeContext()
  const { messages } = useIntl()

  const setActivityAction = useCallback(
    () =>
      getActivity().then((data) => {
        setActivity(data.activity)
      }),
    []
  )

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

Home.propTypes = {
  ssrActivity: PropTypes.instanceOf(Object)
}

export default Home
