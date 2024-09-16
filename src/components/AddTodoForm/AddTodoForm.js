import React from "react";
import { TodoContext } from "../../utils/TodoContext";

function AddTodoForm() {
    const {
        addToDo,
        setModalOpened,
    } = React.useContext(TodoContext);
    const [todoText, setTodoText] = React.useState("");
    const handleAddClick = () => {
        addToDo(todoText);
        setModalOpened(false);
    }
    
    const onTodoTextChange = (event) => {
        setTodoText(event.target.value);
    }

    return(
        <div className="modal-content">
            <h3>¡Crea un nuevo ToDo!</h3>
            <input id='newToDoInput'
                placeholder='Subir cambios a GitHub'
                value={todoText}
                onChange={onTodoTextChange}
                onKeyDown={(e) => {if(e.key === "Enter") handleAddClick()}}
            />
            <button onClick={() => handleAddClick()}>Agregar ToDo</button>
        </div>
    );
};

export { AddTodoForm };