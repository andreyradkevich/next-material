import React from 'react'
import PropTypes from 'prop-types'

function Seo({ title, description, ogTitle, ogDescription }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
    </>
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string
}

export default Seo
