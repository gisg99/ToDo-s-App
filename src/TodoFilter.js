import React from 'react';
import './TodoFilter.css';

function TodoFilter(props){
    return(
        <>
            <input placeholder="Buscar un ToDo..."
                value={props.searchValue}
                onChange={(event) => {
                    props.setSearchValue(event.target.value);
                }}
            />
        </>
    );
}

export { TodoFilter };