
/**
Reducer to manage `todo` actions. 
Cases: 
  `ADD_TODO`    => Add the given todo to the list of created Todos. 
  `TOGGLE_TODO` => Toggle the todo state.
Return Default state if an unknown action type is passed.

Params: 
  objList => Array of previously added todos,
  action => Type of action to be performed on given todo.

**/
const todos = (objList = [], action) => {

  switch (action.type) {
    
    case 'ADD_TODO':
      return [
        ...objList,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    
    case 'TOGGLE_TODO':
      return objList.map(todo =>
        (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
      )
    
    default:
      return objList
  }
}

export default todos
