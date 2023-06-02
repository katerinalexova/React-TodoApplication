import React from "react";

function TodoItem(props) {
    return(
        <div className="todo-item">

            <input type="text" value={props.text} />

        </div>
    )
}

export default TodoItem;