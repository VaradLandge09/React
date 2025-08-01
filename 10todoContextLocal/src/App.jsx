import { useEffect, useState } from 'react';
import {TodoProvider} from './contexts'

function App() {

  const [todos, setTodos] = useState([]);

  const appTodo = (todo) => {
    setTodos((prev) => [...prev, todo])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toogleCompleted = (id) => {
    setTodos((prev) => prev.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
    }))

    // setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));
    if(todo && todo.length > 0) {
      setTodos(todo)
    }
  }, [])

  useEffect(() => {
    localStorage("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toogleCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
