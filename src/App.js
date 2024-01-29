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


  //2. Declaramos lo que se hará cuando se haga clic en completar un Todo, se buscará el index de el
  //elemento del array que tenga la variable recibida, en este caso text, y con ese index se actualizará
  //la propiedad completed
  const completeToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text == text
    );
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos);
  }

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text == text
    );
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos);
  }

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
        {  toDos.filter(toDo => toDo.text.toLowerCase().includes(searchValue.toLowerCase( ))).map(toDo => (
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

      <CreateTodoButton />
    </>
  );
}

export default App;