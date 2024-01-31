import React from 'react';
import './TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem(props){ //Los componentes empiezan con mayuscula
    return (
      <li>
        <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
        <p className={`${props.completed && "task-completed"}`}>{props.texto}</p>
        <DeleteIcon onDelete={props.onDelete}/>
      </li>
    );
  }

export { TodoItem };