import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({ children }) { //Creamos un provider para guardar todos los estados, funciones y variables que tengan que ver con el
    //contexto de los ToDos, y exportandolo podemos usarlos en cualquier componente externo que use algo relacionado al contexto.

    //const {item: toDos, saveItem: saveToDos, loading, error} = useLocalStorage('ToDos_Storage', [{ text: 'Agrega tu primer ToDo', completed: false }]);
    const {item: toDos, saveItem: saveToDos, loading, error} = useLocalStorage('ToDos_Storage', []);
    const [searchValue, setSearchValue] = React.useState("");
    const [modalOpened, setModalOpened] = React.useState(false);
    const completedToDos = toDos.filter(toDo => toDo.completed).length;
    const totalToDos = toDos.length;

    const completeToDo = (ToDoToComplete) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex((toDo) => toDo.text == ToDoToComplete);
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

    //Para retornar los valores devolvemos un Provider con todos los estados, funciones y variables que queramos
    return (
        <TodoContext.Provider value={{
            toDos,
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            //searchedTodos,
            completeToDo,
            deleteToDo,
            addToDo,
            modalOpened,
            setModalOpened,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };