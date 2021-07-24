import React from 'react'
import PropTypes from 'prop-types'

import Link from '@components/Link'

function List({ list }) {
  return (
    <ul>
      {list.map((entity) => {
        return (
          <li key={entity.text}>
            <Link href={entity.href}>{entity.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string
    }).isRequired
  )
}

export default List
