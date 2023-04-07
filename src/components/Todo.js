import React, { useState } from "react"
import CheckIcon from "../images/icon-check.svg"
import CrossIcon from "../images/icon-cross.svg"
import { Draggable } from "react-beautiful-dnd"

function Todo({item, todo, setTodo, darkMode, idx}){

    const [showCross, setShowCross] = useState(false)

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
    return (
        <Draggable 
            key={item.id}
            draggableId={item.id.toString()}
            index={idx}
        >
            {(provided, snapshot) => (
            <li 
            id="todo-list"
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            key={item.id}
            className={`todo ${darkMode ? "todo-dark bd-dark" : ""} 
            ${snapshot.isDragging ? "selected" : "not-selected"}`} 
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
                `todo-description ${item.completed ? darkMode ? "line-through-dark" : "line-through"  : ""}
                `}>
                {item.message}
            </p>
            { showCross &&
            <img 
                src={CrossIcon} 
                alt="cross-icon" 
                className="cross-icon" 
                onClick={() => handleDelete(item.id)} />}
            </li>
            )}

        </Draggable>
    )
}

export default Todo