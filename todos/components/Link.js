import React from 'react'
import PropTypes from 'prop-types'

/**
Footer link component. Receives params
active, children(Node) and click listener.
If link is active return the child node else register
on-click listener and return. 
**/
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#" onClick={e => {e.preventDefault() onClick()}}>
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link