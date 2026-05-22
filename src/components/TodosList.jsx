import Todo from "./Todo"

function TodosList({todoData, removeTodo, toggleComplete, updateTodo}) {
  return (
    <div>
        {todoData.map((todo) => (
          <Todo data={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} updateTodo={updateTodo}/>
        ))}
    </div>
  )
}

export default TodosList