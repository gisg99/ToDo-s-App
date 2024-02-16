import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const handleAddClick = () => {
        const inputS = document.getElementsByClassName("newToDoInput")[0];
        if(inputS.value != ""){
            const newToDo = inputS.value;
            props.onAdd(newToDo);
            inputS.value = "";
        }
    }
    
    return(<div className='buttonContainer'>
        <input className='newToDoInput' placeholder='Crear un nuevo ToDo' onKeyDown={(e) => {if(e.key === "Enter")handleAddClick()}}/>
        <button onClick={handleAddClick}>+</button>
        </div>
    );
}

export { CreateTodoButton };