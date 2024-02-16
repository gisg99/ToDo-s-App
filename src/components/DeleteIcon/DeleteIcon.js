import React from 'react';
import { TodoIcon } from '../../components';

function DeleteIcon(props){
    return(
        <TodoIcon
            type="delete"
            color="gray"
            onClick={props.onDelete}
        />
    );
}

export { DeleteIcon };