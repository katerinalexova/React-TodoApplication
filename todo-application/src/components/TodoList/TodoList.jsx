import React, { useState } from "react";

import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
    
    const[todos, setTodos] = useState([]);
    const[newTodo, setNewTodo] = useState('');

    const handleAddTodo = (event) => {
        setNewTodo(event.target.value);
    }

    const updateTodos = () => {
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }

    const handleEditTodo = (index, updatedTodo) => {
        setTodos((prevTodos) => {
            const newTodos = [...prevTodos];
            newTodos[index] = updatedTodo;
            return newTodos;
        })
    }

    const handleDeleteTodo = (index) => {
        setTodos((prevTodos) => {
          const newTodos = [...prevTodos];
          newTodos.splice(index, 1); // Remove the todo item at the specified index
          return newTodos;
        });
      };

    return(
        <div className="todo-list-body">

            <div className="add-todo-input">
                <input type="text" placeholder="Add new task" value={newTodo} onChange={handleAddTodo} />
                <button type="submit" onClick={updateTodos}>Add</button>
            </div>

            <div className="todo-items">
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <TodoItem text={todo} onEdit={(updatedTodo) => handleEditTodo(index, updatedTodo)}/>
                            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default TodoList;