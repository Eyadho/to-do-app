import Todo from "./Todo"

function TodosList({todoData, removeTodo, toggleComplete}) {
  return (
    <div>
        {todoData.map((todo) => (
          <Todo data={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} />
        ))}
    </div>
  )
}

export default TodosList