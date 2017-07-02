import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

//http://redux.js.org/docs/api/combineReducers.html
const todoApp = combineReducers({todos, visibilityFilter})

export default todoApp