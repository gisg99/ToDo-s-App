import React from 'react';
import { TodoCount } from '../components';
import { TodoFilter } from '../components';
import { TodoList } from '../components';
import { TodoItem } from '../components';
import { CreateTodoButton } from '../components/';
import { useLocalStorage } from '../utils/useLocalStorage';


// const defaultTodos = [
//   { text: 'Agrega tu primer ToDo', completed: false },
//   { text: 'Completa tu primer ToDo', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('ToDos_Storage', JSON.stringify(defaultTodos));

// localStorage.removeItem('ToDos_Storage');

function App() {

  const [toDos, saveToDos] = useLocalStorage('ToDos_Storage', [{ text: 'Agrega tu primer ToDo', completed: false }]);
  const [searchValue, setSearchValue] = React.useState("");
  const completedToDos = toDos.filter(toDo => toDo.completed).length;
  const totalToDos = toDos.length;

  const completeToDo = (ToDoToComplete) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text == ToDoToComplete
    );
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  }

  const deleteToDo = (ToDoToDelete) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text == ToDoToDelete
    );
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  }

  const addToDo = (ToDoToAdd) => {
    const newToDos = [...toDos];
    newToDos.push({ text: ToDoToAdd, completed: false }); 
    saveToDos(newToDos);
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