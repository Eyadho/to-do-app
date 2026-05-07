import Todo from "./Todo"

function TodosList({todoData}) {
  return (
    <div>
        {todoData.map((todo) => (
          <Todo data={todo} />
        ))}
    </div>
  )
}

export default TodosList