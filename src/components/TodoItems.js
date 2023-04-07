import React from "react"
import Todo from "./Todo"
import { DragDropContext, Droppable } from "react-beautiful-dnd"

function TodoItems({todo, setTodo, darkMode, activeTodos, filterAction}){

    const completedTodos = todo.filter(item => item.completed )
    const todoItems = filter(filterAction).map((item, idx) => {
        return (
          <Todo
            key={item.id}
            idx={idx}
            item={item}
            todo={todo}
            setTodo={setTodo}
            darkMode={darkMode}
          />
        )
    })

    function filter(action){
        if ( action === "active"){
          return activeTodos
        } else if (action === "completed"){
          return completedTodos
        } else if (action === "all") {
          return todo
        }
    }
    
    function handleEnd(result){
        if (!result.destination) return
        const items = Array.from(todo);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTodo(items);
    }
    return (
        <DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId="to-do">
                    {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef} 
                    className={`${darkMode ? "ul-dark" : ""}`}>
                    {todoItems}
                    {provided.placeholder}
                </ul>
                )}
                </Droppable>
        </DragDropContext>
    )

}

export default TodoItems