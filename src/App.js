import { useState } from "react"
import Banner from "./images/bg-mobile-light.jpg"
import LightModeMoon from "./images/icon-moon.svg"
import CheckIcon from "./images/icon-check.svg"
import CrossIcon from "./images/icon-cross.svg"

function App() {
  const [message, setMessage] = useState(null)
  const [todo, setTodo] = useState({message: null, completed: false })


  function handleChange(e){
    setMessage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setTodo({message: message, completed: false})
  }

  console.log(todo)

  const itemsList = []

  // const todo = {
  //   message: "",
  //   completed: false,
  // }

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
          </div>
          <div className="todo">
            <p className="items-left">5 items left</p>
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
