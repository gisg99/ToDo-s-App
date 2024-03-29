import React from 'react';
import './TodoCount.css';

function TodoCount(props){
    return(
        <>
            <div className="main-container">
                <div className="container">
                    <div className="pic">
                        <img src="https://phantom-marca.unidadeditorial.es/f6e2103436fb50859a5167f850e248b4/resize/1200/f/webp/assets/multimedia/imagenes/2022/02/20/16453915466200.jpg"/>
                    </div>
                    <h1>¡Hola Gabriel!</h1>
                </div>
                {props.total == 0 &&
                    <><h3>No tienes</h3><h2>NINGÚN</h2><h3>ToDo</h3></>
                }
                {(props.completed == props.total && props.total > 0) && 
                    <><h3>¡FELICIDADES! Has completado</h3><h2>TODOS </h2><h3>los ToDo's</h3></>
                }
                {props.completed != props.total &&
                    <><h3>Has completado</h3><h2>{props.completed} <span>de</span> {props.total}</h2><h3>ToDo's</h3></>
                }
            </div>
        </>
    );
}

export { TodoCount };