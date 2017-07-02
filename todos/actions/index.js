
/**
Acceptable actions on todos.
**/

//Id for newly added todo.
let nextTodoId = 0

/**
Action constant for addTodo. 
Returns: 
  type => `ADD_TODO`.
  id => AutoIncrement field starting from 1.
  text => Todo text string.
**/
const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

/**
Action constant for toggleTodo.
Returns:
  type => `TOGGLE_TODO`.
  id => Id for the todo that has been clicked.
**/
const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

/**
Action constant for setting visible filter,
based on link selection in Application Footer
Returns:
  type => `SET_VISIBILITY_FILTER`,
  filter => Filter value i.e `SHOW_ALL`, `SHOW_COMPLETED` or `SHOW_ACTIVE`
**/
const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}



export {
  addTodo,
  setVisibilityFilter,
  toggleTodo
}