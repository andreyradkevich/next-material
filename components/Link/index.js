import React from 'react'
import NextLink from 'next/link'
import PropTypes from 'prop-types'

function Link({ href, children }) {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default Link
