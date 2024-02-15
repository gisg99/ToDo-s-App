import React from 'react';
import { TodoCount } from './TodoCount';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


// const defaultTodos = [
//   { text: 'Agrega tu primer ToDo', completed: false },
//   { text: 'Completa tu primer ToDo', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('ToDos_Storage', JSON.stringify(defaultTodos));

// localStorage.removeItem('ToDos_Storage');

function App() {
  const localStorageTodos = localStorage.getItem('ToDos_Storage');

  let parsedTodos;

  if(!localStorageTodos) {
    localStorage.setItem('ToDos_Storage', JSON.stringify([{ text: 'Agrega tu primer ToDo', completed: false }]));
    parsedTodos = [{ text: 'Agrega tu primer ToDo', completed: false }];
  }
  else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [toDos, setToDos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedToDos = toDos.filter(toDo => toDo.completed).length;
  const totalToDos = toDos.length;


  const saveToDos = (newToDos) => {
    setToDos(newToDos);
    localStorage.setItem('ToDos_Storage', JSON.stringify(newToDos));
  }

  const completeToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text == text
    );
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  }

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text == text
    );
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  }

  const addToDo = (textD) => {
    /*const newToDos = [...toDos];
    newToDos.push({ text: textD, completed: false });
    setToDos(newToDos);*/
    console.log(textD);
  }

  return (
    <>
      <TodoCount completed={completedToDos} total={totalToDos}/>
      <TodoFilter 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList> {/*Instalaremos el paquete React icons para poder utilizar iconos en
      nuestro proyecto, mediante el comando 'npm install react-icons --save' */}
        {  toDos.filter(toDo => toDo.text.toLowerCase().includes(searchValue.toLowerCase())).map(toDo => (
          <TodoItem
            key={toDo.text}
            texto={toDo.text}
            completed={toDo.completed}
            // 1. Declaramos un evento onComplete que servirá para ejecutar una serie de pasos cuando el 
            //ToDo sea completado ***IMPORTANTE ***Encapsular la funcion dentro de una funcion flecha
            // porque sino, no podremos enviar los parametros por parentesis
            onComplete={() => completeToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton onAdd={(aaaG) => addToDo(aaaG)}/>
    </>
  );
}

export default App;