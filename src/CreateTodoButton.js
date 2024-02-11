import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props){
    return(<div className='buttonContainer'>
        <input className='newToDoInput' placeholder='Crear un nuevo ToDo'/>
        <button onClick={() => AddNewToDo()}>+</button>
        </div>
    );

    function AddNewToDo(){
        const inputS = document.getElementsByClassName("newToDoInput")[0];
        console.log(inputS);
        props.onAdd(inputS.value);
    }
}

export { CreateTodoButton };