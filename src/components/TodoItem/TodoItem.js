import React from 'react';
import './TodoItem.css';
import { CompleteIcon } from '../../components';
import { DeleteIcon } from '../../components';

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