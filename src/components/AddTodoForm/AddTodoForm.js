import React from "react";
import { TodoContext } from "../../utils/TodoContext";

function AddTodoForm() {
    const {
        addToDo,
        setModalOpened,
    } = React.useContext(TodoContext);
    const handleAddClick = () => {
        let text = document.getElementById("newToDoInput").value;
        addToDo(text);
        setModalOpened(false);
    }
    
    return(
        <div className="modal-content">
            <h3>¡Crea un nuevo ToDo!</h3>
            <input id='newToDoInput' placeholder='Subir cambios a GitHub' onKeyDown={(e) => {if(e.key === "Enter") handleAddClick()}}/>
            <button onClick={() => handleAddClick()}>Agregar ToDo</button>
        </div>
    );
};

export { AddTodoForm };