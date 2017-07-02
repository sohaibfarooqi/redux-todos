import React from 'react'
import PropTypes from 'prop-types'

/**
A single `Todo` template.
Consist of a text string, completed flag and onClick callback.
style is determine whether Todo is completed or not.
**/
const Todo = ({text, completed, onClick}) => (
  <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
    {text}
  </li>
)

Todo.PropTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Todo