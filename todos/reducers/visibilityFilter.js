/**
Reducer to manage visibility of Todos.
Cases:
	`SET_VISIBILITY_FILTER` => Set the specified visibility to Todo.
**/
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  
  switch (action.type) {
    
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    
    default:
      return state
  }
}

export default visibilityFilter