import React from 'react';
import './TodoItem.css';
import { CompleteIcon } from '../../components';
import { DeleteIcon } from '../../components';

function TodoItem(props){ //Los componentes empiezan con mayuscula
    return (
      <li>
        <div className='itemContainer'>
          <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
          <p className={`${props.completed && "task-completed"}`}>{props.texto}</p>
          <DeleteIcon onDelete={props.onDelete}/>
        </div>
      </li>
    );
  }

export { TodoItem };