import React, { useState } from "react";

import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
    
    const[newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (event) => {
        setNewTodo(event.target.value);
    }

    const updateTodos = () => {
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }

    return(
        <div className="todo-list-body">

            <div className="add-todo-input">
                <input type="text" placeholder="Add new task" value={newTodo} onChange={handleAddTodo} />
                <button type="submit" onClick={updateTodos}>Add</button>
            </div>

            <div className="todo-items">
                <ul>
                    {todos.map((todoText, index) => (
                        <li key={index}>
                            <TodoItem text={todoText} />
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default TodoList;