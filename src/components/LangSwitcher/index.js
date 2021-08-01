import React, { useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useIntl } from 'react-intl'
import {
  makeStyles,
  ListItem,
  Popover,
  ListItemText,
  List,
  Button
} from '@material-ui/core'

import { languages as langCodesArray } from '@constants/languages'

import styles from './styles'

const useStyles = makeStyles(styles)

function LangSwitcher({ className, anchorOrigin, transformOrigin }) {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)

  const { setLanguage, lang } = useIntl()

  const languages = useMemo(
    () =>
      langCodesArray.map((data) => {
        return {
          code: data
        }
      }),
    []
  )

  const handlePopoverOpen = useCallback(
    (event) => {
      setAnchorEl(event.currentTarget)
    },
    [setAnchorEl]
  )

  const handlePopoverClose = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  const handleLocaleSwitch = useCallback(
    (locale) => () => {
      setLanguage(locale)
      handlePopoverClose()
    },
    [setLanguage, handlePopoverClose]
  )

  const LanguageList = useMemo(
    () => (
      <List dense>
        {languages.map((localeProp) => (
          <ListItem
            button
            disableRipple
            key={localeProp?.code}
            onClick={handleLocaleSwitch(localeProp?.code)}
          >
            <ListItemText primary={localeProp?.code} />
          </ListItem>
        ))}
      </List>
    ),
    [handleLocaleSwitch, languages]
  )

  const currentLocale = useMemo(() => {
    return languages.find((language) => {
      return language?.code === lang
    })
  }, [lang, languages])

  return [
    <Button
      key="button"
      onClick={handlePopoverOpen}
      className={clsx(classes.button, className)}
    >
      {currentLocale?.code}
    </Button>,
    <Popover
      key="popover"
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      classes={{ paper: classes.popover, root: classes.root }}
      onClose={handlePopoverClose}
      open={!!anchorEl}
      transformOrigin={transformOrigin}
    >
      {LanguageList}
    </Popover>
  ]
}

LangSwitcher.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  transformOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  }
}

LangSwitcher.propTypes = {
  className: PropTypes.string,
  anchorOrigin: PropTypes.instanceOf(Object).isRequired,
  transformOrigin: PropTypes.instanceOf(Object).isRequired
}

export default LangSwitcher
