import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/**
AddTodo component. This container-component
adds a newly created todo to the TodoList.

The template consist of a form. Within a form is an
input field and a submit button. Upon submission the 
form `onSubmit` gets triggered and it checks if the value is 
non-empty, then dispatch the action to `Todo` Reducer.
Finally empty the input field.
**/
let AddTodo = ({dispatch}) => {
  let input 
  return(
  <div>
    <form onSubmit = {e => {
          e.preventDefault()
          if(!input.value.trim()){
            return
          } 
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
      <input ref = {node => {input = node}}/>
      <button type = "submit"> Add New Todo</button>
    </form>
  </div>
 )
}

AddTodo = connect()(AddTodo)

export default AddTodo
