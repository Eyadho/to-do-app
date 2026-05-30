import { useState } from 'react'
import './App.css'
import TodosList from './components/TodosList'
import useTodoStore from './store/todosStore'

function App() {

  const [newTodo, setNewTodo] = useState("")

  const addTodo = useTodoStore((state) => state.addTodo)
  const clearAllTodos = useTodoStore((state) => state.clearAllTodos)

  return (
    <>
      <div>

        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add todo"
        />

        <button
          onClick={() => {
            addTodo(newTodo)
            setNewTodo("")
          }}
        >
          Add
        </button>

        <button onClick={clearAllTodos}>
          Clear All
        </button>

      </div>

      <TodosList />
    </>
  )
}


export default App
