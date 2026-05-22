import { useState } from "react"

function Todo({data, removeTodo, toggleComplete, updateTodo}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(data.title)


  return (
    // <div className="todo">
    //   <input onChange={() => toggleComplete(data.id)} type="checkbox" checked={data.completed}/>
    //   <span style={{textDecoration: data.completed ? 'line-through' : 'none'}}>{data.title} </span>
    //   <button onClick={() => removeTodo(data.id)}>X</button>
    // </div>

    <div className="todo">
      <input
        onChange={() => toggleComplete(data.id)}
        type="checkbox"
        checked={data.completed}
      />

      {isEditing ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <span
          style={{
            textDecoration: data.completed ? "line-through" : "none",
          }}
        >
          {data.title}
        </span>
      )}

      {isEditing ? (
        <button
          onClick={() => {
            updateTodo(data.id, editText);
            setIsEditing(false);
          }}
        >
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={() => removeTodo(data.id)}>X</button>
    </div>
  );
}

export default Todo