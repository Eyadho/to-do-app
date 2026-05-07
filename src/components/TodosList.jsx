import Todo from "./Todo"

function TodosList({todoData}) {
  return (
    <div>
        {todoData.map((todo) => (
            <Todo />
        ))}
    </div>
  )
}

export default TodosList