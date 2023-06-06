import React from 'react'
import PropTypes from 'prop-types'

const FilterControls = ({
  todo,
  setTodo,
  darkMode,
  activeTodos,
  filterAction,
  setFilterAction
}) => {
  const clearCompleted = () => {
    const newArr = todo.filter(item => !item.completed)
    setTodo(newArr)
  }
  return (
    <>
        <div className={`todo-info items-left ${darkMode ? 'todo-dark' : ''}`}>
            <p className={`items-left ${darkMode ? 'items-dark' : ''}`}
            >{activeTodos.length} items left</p>
            <div className={`filter-big-screen 
            ${darkMode ? 'filter-big-screen-dark' : ''}`} id="filter-menu-big">
            <p id={`${filterAction === 'all' ? 'selected' : ''}`}
                className={`${darkMode ? 'items-dark' : ''} filter 
                `}
                onClick={() => setFilterAction('all')}>All</p>
            <p id={`${filterAction === 'active' ? 'selected' : ''}`}
                className={`${darkMode ? 'items-dark' : ''} filter 
                `}
                onClick={() => setFilterAction('active')}>Active</p>
            <p id={`${filterAction === 'completed' ? 'selected' : ''}`}
                className={`${darkMode ? 'items-dark' : ''} filter 
                `}
                onClick={() => setFilterAction('completed')}>Completed</p>
            </div>
            <p className={`items-clear ${darkMode ? 'items-dark items-dark-hover' : ''}`}
            onClick={clearCompleted}>Clear Completed</p>
        </div>
        <div
            className={`todo-filter ${darkMode ? 'todo-dark filter-dark' : ''}`}
            id="filter-menu-small"
        >
            <p id={`${filterAction === 'all' ? 'selected' : ''}`}
                className={`${darkMode ? 'items-dark' : ''} filter 
                `}
                onClick={() => setFilterAction('all')}>All</p>
            <p id={`${filterAction === 'active' ? 'selected' : ''}`}
                className={`${darkMode ? 'items-dark' : ''} filter 
                `}
                onClick={() => setFilterAction('active')}>Active</p>
            <p id={`${filterAction === 'completed' ? 'selected' : ''}`}
                className={`${darkMode ? 'items-dark' : ''} filter 
                `}
                onClick={() => setFilterAction('completed')}>Completed</p>
        </div>
    </>
  )
}

FilterControls.propTypes = {
  todo: PropTypes.array,
  setTodo: PropTypes.func,
  darkMode: PropTypes.bool,
  activeTodos: PropTypes.array,
  filterAction: PropTypes.string,
  setFilterAction: PropTypes.func
}

export default FilterControls
