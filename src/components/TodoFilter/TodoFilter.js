import React from 'react';
import './TodoFilter.css';
import { TodoContext } from '../../utils/TodoContext';

function TodoFilter(props){
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    return(
        <>
            <input placeholder="Buscar un ToDo..."
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
        </>
    );
}

export { TodoFilter };