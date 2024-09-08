import React from 'react';
import './TodoCount.css';
import { TodoContext } from '../../utils/TodoContext';

function TodoCount(){
    //Otra forma de consumir los datos desde el Context es usar el Hook de React useContext, en el cual solo tenemos que indicar el contexto del cual queremos
    //obtener los datos y de una manera más accesible se puede acceder a ellos, esta forma es la número 2 y es mucho mas cómoda que con el consumer
    const {
        completedToDos,
        totalToDos
    } = React.useContext(TodoContext);

    return(
        <>
            <div className="main-container">
                <div className="container">
                    <div className="pic">
                        <img src="https://phantom-marca.unidadeditorial.es/f6e2103436fb50859a5167f850e248b4/resize/1200/f/webp/assets/multimedia/imagenes/2022/02/20/16453915466200.jpg"/>
                    </div>
                    <h1>¡Hola Gabriel!</h1>
                </div>
                {totalToDos == 0 &&
                    <><h3>No tienes</h3><h2>NINGÚN</h2><h3>ToDo</h3></>
                }
                {(completedToDos == totalToDos && totalToDos > 0) && 
                    <><h3>¡FELICIDADES! Has completado</h3><h2>TODOS </h2><h3>los ToDo's</h3></>
                }
                {completedToDos != totalToDos &&
                    <><h3>Has completado</h3><h2>{completedToDos} <span>de</span> {totalToDos}</h2><h3>ToDo's</h3></>
                }
            </div>
        </>
    );
}

export { TodoCount };