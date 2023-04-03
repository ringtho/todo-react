import { useEffect, useState } from "react"
// import Banner from "./images/banner2.jpg"
import Banner from "./images/bg-mobile-light.jpg"
import BannerDark from "./images/bg-mobile-dark.jpg"
import Moon from "./images/icon-moon.svg"
import Sun from "./images/icon-sun.svg"
import CheckIcon from "./images/icon-check.svg"
import CrossIcon from "./images/icon-cross.svg"
import { nanoid } from 'nanoid'
import Draggable from 'react-draggable'

function App() {
  const [message, setMessage] = useState("")
  const [todo, setTodo] = useState([])
  const [filterAction, setFilterAction] = useState("all")
  const [darkMode, setDarkMode] = useState(false)
  const [showCross, setShowCross] = useState(false)
  const activeTodos = todo.filter(item => !item.completed)
  const completedTodos = todo.filter(item => item.completed )

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

  function handleDelete(id){
    const updatedArr = todo.filter(item => item.id !== id)
    setTodo(updatedArr)
  }

  function toggleComplete(id){
    const updatedArr = todo.map(item => 
      item.id === id 
      ? {...item, completed: !item.completed} 
      : item
    )
    setTodo(updatedArr) 
  }

  function clearCompleted(){
    const newArr = todo.filter(item => !item.completed)
    setTodo(newArr)
  }

  useEffect(()=>{
    darkMode ?
    document.body.className = "dark-background" :
    document.body.className = "light-background"

  },[darkMode])

  function filter(action){
    if ( action === "active"){
      return activeTodos
    } else if (action === "completed"){
      return completedTodos
    } else if (action === "all") {
      return todo
    }
  }

  const eventHandler = (e, data) => {
    console.log('Event Type', e.type);
    console.log({e, data});
  }

  
  const todoItems = filter(filterAction).map((item, idx) => {
    return (
      <Draggable
        axis="y"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        scale={1}
        onDrag={eventHandler}
        // grid={[25, 25]}
        // handle=".handle"
      >
      <li 
        className={`todo ${darkMode ? "todo-dark bd-dark" : ""}`} 
        key={idx}
        onMouseEnter={() => setShowCross(true)}
        onMouseLeave={() => setShowCross(false)}
        >
        <div 
          className={`circle-todo ${item.completed ? "fill" : ""} 
          ${darkMode ? "bd-full-dark" : ""}`}
          onClick={() => toggleComplete(item.id)}>
            {
          item.completed && 
          <img src={CheckIcon} alt="check-icon" className="check-icon" />
          }
        </div>
        
        <p className={
          `todo-description ${item.completed ? "line-through" : ""}
          ${darkMode ? "line-through-dark" : ""}`}>
          {item.message}
        </p>
        { showCross &&
        <img 
          src={CrossIcon} 
          alt="cross-icon" 
          className="cross-icon" 
          onClick={() => handleDelete(item.id)} />}
      </li>
      </Draggable>
    )
  })

  return (
    <div className="app">
      <header>
        <img src={darkMode ? BannerDark : Banner} alt="header-img" />
        <div className="headings">
          <h1>TODO</h1>
          <img 
            className="moon-icon" 
            src={darkMode ? Sun : Moon} 
            alt="light-mode-moon"
            onClick={toggleDarkMode} />
        </div>
      </header>
      <main>
        <form className="add-todo" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Create a new todo" 
            className={`input-field ${darkMode ? "input-field-dark" : ""}`}
            value={message}
            onChange={handleChange} />
          <div className={`circle ${darkMode ? "bd-full-dark" : ""}`}></div>
        </form>
        <div className="todo-items">
          <ul className={`${darkMode ? "ul-dark" : ""}`}>
            {todoItems}
            <li className={`todo ${darkMode ? "todo-dark" : ""}`}>
              <p className={`items-left ${darkMode ? "items-dark" : ""}`}
              >{activeTodos.length} items left</p>
              <p className={`items-clear ${darkMode ? "items-dark" : ""}`}
               onClick={clearCompleted}>Clear Completed</p>
            </li>
          </ul>
          
          <div className={`todo-filter ${darkMode ? "todo-dark filter-dark" : ""}`}>
            <p 
              className={`${darkMode ? "items-dark" : "" } filter 
              ${filterAction === "all" ? "selected" : "" }
              `} 
              onClick={()=>setFilterAction("all")}>All</p>
            <p 
              className={`${darkMode ? "items-dark" : "" } filter 
              ${filterAction === "active" ? "selected" : "" }
              `} 
              onClick={()=>setFilterAction("active")}>Active</p>
            <p 
              className={`${darkMode ? "items-dark" : "" } filter 
              ${filterAction === "completed" ? "selected" : "" }
              `} 
              onClick={()=>setFilterAction("completed")} >Completed</p>
          </div>
          <p className={`reorder-text ${darkMode ? "filter-dark" : ""}`}>Drag and drop to reorder list</p>
        </div>
      </main>
    </div>
  );
}

export default App;
