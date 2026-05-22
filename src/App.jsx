import { useState } from 'react'
import './App.css'
import TodosList from './components/TodosList'

function App() {
  const [todo, setTodo] = useState([
    {
    id: 1,
    title: "Finish React project",
    completed: false,
  },
  {
    id: 2,
    title: "Buy groceries",
    completed: false,
  },
  {
    id: 3,
    title: "Go for a workout",
    completed: false,
  },
  {
    id: 4,
    title: "Read 20 pages of a book",
    completed: false,
  }
  ])


  const [newTodo, setNewTodo] = useState("")
  const addTodo = () => {
    if (newTodo.trim() === "") return

    const newItem = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    }
    setTodo([...todo, newItem])
    setNewTodo("")
  }


  const removeTodo = (id) => {
    setTodo(todo.filter(item => item.id !== id))
  }

  const toggleComplete = (id) => {
    setTodo(todo.map(item =>
      item.id === id ? {...item, completed: !item.completed} : item 
    ))
  }

  const updateTodo = (id, newTitle) => {
    setTodo(todo.map(item => 
      item.id === id ? { ...item, title: newTitle} : item
    ))
  }
  

  return (
    <>
    <div>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder='Add new Todo ...' />
      <button onClick={addTodo}>Add</button>
    </div>



    <TodosList 
      todoData={todo} 
      removeTodo={removeTodo} 
      toggleComplete={toggleComplete}
      updateTodo={updateTodo}
    />
    </>
  )
}

export default App
