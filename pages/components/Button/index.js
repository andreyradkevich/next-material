import React from 'react'
import { Button as MuiButton, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles'

const useStyles = makeStyles(styles)

function Button({ children, onClick, className }) {
  const classes = useStyles()

  return (
    <MuiButton onClick={onClick} className={clsx(className, classes.root)}>
      {children}
    </MuiButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Button
