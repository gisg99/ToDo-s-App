import React from 'react';
import { ReactComponent as CheckSVG } from '../../assets/icons/check.svg';
import { ReactComponent as DeleteSVG } from '../../assets/icons/delete.svg';
import './TodoIcon.css';

const iconTypes = {
    "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
    "delete": (color) => <DeleteSVG className='Icon-svg' fill={color}/>,
}

function TodoIcon(props){
    return (
        <span className={`Icon Icon-svg Icon-${props.type}`} onClick={props.onClick}>
            {iconTypes[props.type](props.color)}
        </span>
    )
}

export { TodoIcon };