import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../../utils/TodoContext';

function CreateTodoButton(){
    // const handleAddClick = () => {
    //     const inputS = document.getElementsByClassName("newToDoInput")[0];
    //     if(inputS.value != ""){
    //         const newToDo = inputS.value;
    //         props.onAdd(newToDo);
    //         inputS.value = "";
    //     }
    // }
    const {
        modalOpened,
        setModalOpened,
    } = React.useContext(TodoContext);
    
    return(<div className='buttonContainer'>
        {/* <input className='newToDoInput' placeholder='Crear un nuevo ToDo' onKeyDown={(e) => {if(e.key === "Enter")handleAddClick()}}/> */}
        <button className='icon-btn' onClick={() => setModalOpened(!modalOpened)}>{modalOpened ? "-" : "+"}</button>
        </div>
    );
}

export { CreateTodoButton };