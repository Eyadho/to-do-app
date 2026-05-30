import { useState } from "react"
import useTodoStore from "../store/todosStore"

function Todo({ data }) {

  const removeTodo = useTodoStore((state) => state.removeTodo)
  const toggleComplete = useTodoStore((state) => state.toggleComplete)
  const updateTodo = useTodoStore((state) => state.updateTodo)

  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(data.title)

  return (
    <div className="todo">

      <input
        type="checkbox"
        checked={data.completed}
        onChange={() => toggleComplete(data.id)}
      />

      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration:
              data.completed
                ? "line-through"
                : "none"
          }}
        >
          {data.title}
        </span>
      )}

      {isEditing ? (
        <button
          onClick={() => {
            updateTodo(data.id, editText)
            setIsEditing(false)
          }}
        >
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}

      <button onClick={() => removeTodo(data.id)}>
        X
      </button>

    </div>
  )
}

export default Todo