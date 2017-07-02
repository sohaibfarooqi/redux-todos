import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

/**
TodoList template. This component actually gets included in main 
layout. Behind the scenes it consists of individual todo item, each
with a specified `id`.

onClick will invoke the click-listener passing in todo-id.
**/
const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo => (<Todo key={todo.id} {...todo} onClick={onTodoClick(todo.id)} />))}
  </ul>
)

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}
export default TodoList
