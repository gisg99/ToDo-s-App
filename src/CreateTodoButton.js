import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const handleAddClick = () => {
        const inputS = document.getElementsByClassName("newToDoInput")[0];
        const newToDo = inputS.value;
        props.onAdd(newToDo);
    }
    
    return(<div className='buttonContainer'>
        <input className='newToDoInput' placeholder='Crear un nuevo ToDo'/>
        <button onClick={handleAddClick}>+</button>
        </div>
    );
}

export { CreateTodoButton };