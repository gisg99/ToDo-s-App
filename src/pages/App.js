import React from 'react';
import { TodoCount } from '../components';
import { TodoFilter } from '../components';
import { TodoList } from '../components';
import { TodoItem } from '../components';
import { TodoError } from '../components';
import { TodoLoading } from '../components';
import { CreateTodoButton } from '../components/';
import { Modal } from '../components/Modal/Modal';
import { AddTodoForm } from '../components';
import './App.css';
import { TodoContext, TodoProvider } from '../utils/TodoContext';

function App() {
  //A la hora de llamar al Provider, necesitamos declararlo como TodoProvider, y dentro de el definir un
  //Consumer el cual nos ayudará a obtener todos los datos que sean necesarios desde el propio Provider context
  //Esta es una de las 2 formas de consumir la información de los Providers
  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {({
          toDos,
          loading,
          error,
          searchValue,
          completeToDo,
          deleteToDo,
          addToDo,
          modalOpened
        }) => (
          <>
            {loading && <TodoLoading/>}
            {error && <TodoError/>}
            {!loading && !error && <>
                <TodoCount/>
                <TodoFilter/>
                <TodoList>
                {  toDos.filter(toDo => toDo.text.toLowerCase().includes(searchValue.toLowerCase())).map(toDo => (
                  <TodoItem
                    key={toDo.text}
                    texto={toDo.text}
                    completed={toDo.completed}
                    onComplete={() => completeToDo(toDo.text)}
                    onDelete={() => deleteToDo(toDo.text)}
                  />
                ))}
                </TodoList>
                <CreateTodoButton onAdd={(aaaG) => addToDo(aaaG)}/>
                {modalOpened && <Modal>
                    <AddTodoForm/>
                  </Modal>}
              </>
            }
            
          </>
        )}
      </TodoContext.Consumer>
    </TodoProvider>
  );
}

export default App;