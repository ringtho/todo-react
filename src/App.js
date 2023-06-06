import React, { useEffect, useState } from 'react'
import Moon from './images/icon-moon.svg'
import Sun from './images/icon-sun.svg'
import { nanoid } from 'nanoid'
import TodoItems from './components/TodoItems'
import FilterControls from './components/FilterControls'

const App = () => {
  const [message, setMessage] = useState('')
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || [])
  const [filterAction, setFilterAction] = useState('all')
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode') || false))

  const activeTodos = todo.filter(item => !item.completed)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodo(prev => [
      { id: nanoid(), message, completed: false }, ...prev])
    setMessage('')
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    darkMode
      ? document.body.className = 'dark'
      : document.body.className = 'light'
  }, [darkMode, todo])

  return (
    <div className="app">
      <header className={`${darkMode ? 'dark-header' : 'light-header'}`}>
        <div className="headings-container">
          <div className="headings">
            <h1>TODO</h1>
            <img
              className="moon-icon"
              src={darkMode ? Sun : Moon}
              alt="light-mode-moon"
              onClick={toggleDarkMode} />
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <form className="add-todo" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Create a new todo"
              className={`input-field ${darkMode ? 'input-field-dark' : ''}`}
              value={message}
              onChange={handleChange}
              required />
            <div className={`circle ${darkMode ? 'bd-full-dark' : ''}`}></div>
          </form>
          <div className="todo-items">
            <TodoItems
              todo={todo}
              setTodo={setTodo}
              darkMode={darkMode}
              activeTodos={activeTodos}
              filterAction={filterAction}
            />
            <FilterControls
              todo={todo}
              setTodo={setTodo}
              darkMode={darkMode}
              activeTodos={activeTodos}
              filterAction={filterAction}
              setFilterAction={setFilterAction}
            />
            <p className={`reorder-text ${darkMode ? 'filter-dark' : ''}`}>
              Drag and drop to reorder list</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
