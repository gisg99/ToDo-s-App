import './CreateTodoButton.css';

function CreateTodoButton(){
    return(<div className='buttonContainer'>
        <input className='newToDoInput' placeholder='Crear un nuevo ToDo'/>
        <button onClick={(event) => {
            console.log("Clickkk ", event);
        }}>+</button>
        </div>
    );
}

export { CreateTodoButton };