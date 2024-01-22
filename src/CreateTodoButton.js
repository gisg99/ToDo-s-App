import './CreateTodoButton.css';

function CreateTodoButton(){
    return(<div className='buttonContainer'>
        <span className='buttonSpan'>Crear un nuevo ToDo</span>
        <button>+</button>
        </div>
    );
}

export { CreateTodoButton };