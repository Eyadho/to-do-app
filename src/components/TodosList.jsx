import Todo from "./Todo"
import useTodoStore from "../store/todosStore"

function TodosList() {

  const todos = useTodoStore((state) => state.todos)

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          data={todo}
        />
      ))}
    </div>
  )
}

export default TodosList