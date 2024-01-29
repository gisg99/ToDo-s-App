import './TodoItem.css';

function TodoItem(props){ //Los componentes empiezan con mayuscula
    return (
      <li>
        {/* 3. Recibimos el evento onComplete, el cual declaramos en el componente principal*/}
        <span className={`icon ${props.completed && "icon-completed"}`} onClick={props.onComplete}>V</span> 
        <p className={`${props.completed && "task-completed"}`}>{props.texto}</p>
        <span onClick={props.onDelete}>X</span>
      </li>
    );
  }

export { TodoItem };