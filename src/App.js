import { TodoCount } from './TodoCount';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar el Césped', completed: false },
  { text: 'Ir al Super', completed: false },
  { text: 'Ver el partido del Barca', completed: true },
  { text: 'Acomodar la ropa', completed: false },
  { text: 'Pasear al perro', completed: false },
  { text: 'Terminar el curso de React', completed: false },
  { text: 'Comprar cosas para el desayuno', completed: false },
  { text: 'Actualizar cuenta bancaria', completed: false },
  { text: 'Terminar el Fut Champions', completed: false },
];

function App() {
  return (
    <>
      <TodoCount completed={3 } total={8}/>
      <TodoFilter />

      <TodoList> {/*Todos los componentes que se envían dentro de
      un componente se envían como props y en el componente
      podemos recibirlos como props.children*/}
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} texto={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;