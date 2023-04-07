import { useEffect, useState } from "react"
import Moon from "./images/icon-moon.svg"
import Sun from "./images/icon-sun.svg"
import { nanoid } from 'nanoid'
import TodoItems from "./components/TodoItems"

function App() {
  const [message, setMessage] = useState("")
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo"))||[])
  const [filterAction, setFilterAction] = useState("all")
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")|| false))

  const activeTodos = todo.filter(item => !item.completed)
 

  function toggleDarkMode(){
    setDarkMode(!darkMode)
  }

  function handleChange(e){
    setMessage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setTodo(prev => [
      {id: nanoid(),message: message, completed: false},...prev])
    setMessage("")
    
  }

  function clearCompleted(){
    const newArr = todo.filter(item => !item.completed)
    setTodo(newArr)
  }

  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todo))
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    darkMode ?
    document.body.className = "dark" :
    document.body.className = "light"

  },[darkMode, todo])

  return (
    <div className="app">
      <header className={`${darkMode ? "dark-header" : "light-header"}`}>
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
              className={`input-field ${darkMode ? "input-field-dark" : ""}`}
              value={message}
              onChange={handleChange}
              required />
            <div className={`circle ${darkMode ? "bd-full-dark" : ""}`}></div>
          </form>
          <div className="todo-items">
            <TodoItems 
              todo={todo} 
              setTodo={setTodo} 
              darkMode={darkMode} 
              activeTodos={activeTodos}
              filterAction={filterAction} 
            />
            <div className={`todo-info items-left ${darkMode ? "todo-dark" : ""}`}>
              <p className={`items-left ${darkMode ? "items-dark" : ""}`} 
              >{activeTodos.length} items left</p>
                <div className={`filter-big-screen 
                ${darkMode ? "filter-big-screen-dark" : ""}`} id="filter-menu-big">
                <p id={`${filterAction === "all" ? "selected" : "" }`}
                  className={`${darkMode ? "items-dark" : "" } filter 
                  `} 
                  onClick={()=>setFilterAction("all")}>All</p>
                <p id={`${filterAction === "active" ? "selected" : "" }`}
                  className={`${darkMode ? "items-dark" : "" } filter 
                  `} 
                  onClick={()=>setFilterAction("active")}>Active</p>
                <p id={`${filterAction === "completed" ? "selected" : "" }`}
                  className={`${darkMode ? "items-dark" : "" } filter 
                  `} 
                  onClick={()=>setFilterAction("completed")} >Completed</p>
              </div>
              <p className={`items-clear ${darkMode ? "items-dark items-dark-hover" : ""}`}
              onClick={clearCompleted}>Clear Completed</p>
            </div>
            <div className={`todo-filter ${darkMode ? "todo-dark filter-dark" : ""}`}
            id="filter-menu-small">
              <p id={`${filterAction === "all" ? "selected" : "" }`}
                  className={`${darkMode ? "items-dark" : "" } filter 
                  `} 
                  onClick={()=>setFilterAction("all")}>All</p>
                <p id={`${filterAction === "active" ? "selected" : "" }`}
                  className={`${darkMode ? "items-dark" : "" } filter 
                  `} 
                  onClick={()=>setFilterAction("active")}>Active</p>
                <p id={`${filterAction === "completed" ? "selected" : "" }`}
                  className={`${darkMode ? "items-dark" : "" } filter 
                  `} 
                  onClick={()=>setFilterAction("completed")} >Completed</p>
            </div>
            <p className={`reorder-text ${darkMode ? "filter-dark" : ""}`}>
              Drag and drop to reorder list</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
