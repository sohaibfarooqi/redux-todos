import React from 'react'
import FilterLink from '../containers/FilterLink'

/**
This is Footer component of App.
It displays options to filter Todos.
Available options are `SHOW_ALL`, `SHOW_ACTIVE` and `SHOW_COMPLETED`.
It uses `FilterLink` container to filter link based on selection.
**/
const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer