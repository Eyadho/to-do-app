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


  const removeTodo = (id) => {
    setTodo(todo.filter(item => item.id !== id))
  }

  const toggleComplete = (id) => {
    setTodo(todo.map(item =>
      item.id === id ? {...item, completed: !item.completed} : item 
    ))
  }
  

  return (
    <>
    <TodosList todoData={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} />
    </>
  )
}

export default App
