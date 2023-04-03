import { useState } from "react"
import Banner from "./images/bg-mobile-light.jpg"
import LightModeMoon from "./images/icon-moon.svg"
// import CheckIcon from "./images/icon-check.svg"
import CrossIcon from "./images/icon-cross.svg"
import { nanoid } from 'nanoid'

function App() {
  const [message, setMessage] = useState("")
  const [todo, setTodo] = useState([])



  function handleChange(e){
    setMessage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setTodo(prev => [
      {id: nanoid(),message: message, completed: false},...prev])
  }

  console.log(todo)

  const todoItems = todo.map((item, idx) => {
    return (
      <div className="todo" key={idx}>
        <div className="circle-todo"></div>
        <p className="todo-description">{item.message}</p>
        <img src={CrossIcon} alt="cross-icon" className="cross-icon" />
      </div>
    )
  })


  return (
    <div className="app">
      <header>
        <img src={Banner} alt="header-img" />
        <div className="headings">
          <h1>TODO</h1>
          <img className="moon-icon" src={LightModeMoon} alt="light-mode-moon" />
        </div>
      </header>
      <main>
        <form className="add-todo" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Create a new todo" 
            className="input-field"
            value={message}
            onChange={handleChange} />
          <div className="circle"></div>
        </form>
        <div className="todo-items">
          {todoItems}
          {/* <div className="todo">
            <div className="circle-todo"></div>
            <p className="todo-description">My name is my name</p>
            <img src={CrossIcon} alt="cross-icon" className="cross-icon" />
          </div>
          <div className="todo">
            <div className="circle-todo"></div>
            <p className="todo-description">My name is my name</p>
            <img src={CrossIcon} alt="cross-icon" className="cross-icon" />
          </div>
          <div className="todo">
            <div className="circle-todo"></div>
            <p className="todo-description">My name is my name</p>
            <img src={CrossIcon} alt="cross-icon" className="cross-icon" />
          </div>
          <div className="todo">
            <div className="circle-todo fill"></div>
            <p className="todo-description">My name is my name</p>
            <img src={CrossIcon} alt="cross-icon" className="cross-icon" />
          </div>
          <div className="todo">
            <div className="circle-todo"></div>
            <p className="todo-description">My name is my name</p>
            <img src={CrossIcon} alt="cross-icon" className="cross-icon" />
          </div>
          <div className="todo">
            <div className="circle-todo"></div>
            <p className="todo-description">My name is my name</p>
            <img src={CrossIcon} alt="cross-icon" className="cross-icon" />
          </div>
          <div className="todo">
            <div className="circle-todo"></div>
            <p className="todo-description">My name is my name</p>
            <img src={CrossIcon} alt="cross-icon" className="cross-icon" />
          </div> */}
          <div className="todo">
            <p className="items-left">{todo.length} items left</p>
            <p className="items-clear">Clear Completed</p>
          </div>

          <div className="todo-filter">
            <p className="filter selected">All</p>
            <p className="filter">Active</p>
            <p className="filter">Completed</p>
          </div>
          <p className="reorder-text">Drag and drop to reorder list</p>
        </div>
        
      </main>
    </div>
  );
}

export default App;
