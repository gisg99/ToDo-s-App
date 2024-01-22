import './TodoItem.css';

function TodoItem(props){ //Los componentes empiezan con mayuscula
    return (
      <li>
        <span className={`icon ${props.completed && "icon-completed"}`}>V</span>
        <p className={`${props.completed && "task-completed"}`}>{props.texto}</p>
        <span>X</span>
      </li>
    );
  }

export { TodoItem };