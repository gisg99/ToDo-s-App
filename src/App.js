import React from 'react';
import { TodoCount } from './TodoCount';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Agrega tu primer ToDo', completed: false },
  { text: 'Completa tu primer ToDo', completed: false },
  { text: 'Usar estados derivados', completed: true },
  /*{ text: 'Cortar el Césped', completed: false },
  { text: 'Ir al Super', completed: false },
  { text: 'Ver el partido del Barca', completed: true },
  { text: 'Acomodar la ropa', completed: false },
  { text: 'Pasear al perro', completed: false },
  { text: 'Terminar el curso de React', completed: false },
  { text: 'Comprar cosas para el desayuno', completed: false },
  { text: 'Actualizar cuenta bancaria', completed: false },
  { text: 'Terminar el Fut Champions', completed: false },*/
];

function App() {
  const [toDos, setToDos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedToDos = toDos.filter(toDo => toDo.completed).length;
  const totalToDos = toDos.length;

  return (
    <>
      <TodoCount completed={completedToDos} total={totalToDos}/>
      <TodoFilter 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList> {/*Todos los componentes que se envían dentro de
      un componente se envían como props y en el componente
      podemos recibirlos como props.children*/}
        {  toDos.filter(toDo => toDo.text.includes(searchValue)).map(toDo => (
          <TodoItem key={toDo.text} texto={toDo.text} completed={toDo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;