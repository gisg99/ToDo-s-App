import React from "react";

function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }
          else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }, 2500);
    }, []); 
  
    const saveItem = (newItem) => {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    }

    return { item, saveItem, loading, error };
  }

  export { useLocalStorage };
  
// const defaultTodos = [
//   { text: 'Agrega tu primer ToDo', completed: false },
//   { text: 'Completa tu primer ToDo', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('ToDos_Storage', JSON.stringify(defaultTodos));

// localStorage.removeItem('ToDos_Storage');