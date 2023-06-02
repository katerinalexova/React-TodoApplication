import React, { useState } from "react";

function TodoItem(props) {

    const [todoText, setTodoText] = useState(props.text);
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (event) => {
        setTodoText(event.target.value);
      };
    
      const handleEdit = () => {
        setIsEditing(true);
      };
    
      const handleSave = () => {
        props.onEdit(todoText);
        setIsEditing(false);
      };

      return (
        <div className="todo-item">
          {isEditing ? (
            <>
              <input type="text" value={todoText} onChange={handleInputChange} />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <input type="checkbox"/>
              <span>{todoText}</span>
              <button onClick={handleEdit}>Edit</button>
            </>
          )}
        </div>
      );
}

export default TodoItem;