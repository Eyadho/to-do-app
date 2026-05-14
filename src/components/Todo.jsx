function Todo({data, removeTodo, toggleComplete}) {
  return (
    <div className="todo">
      <input onChange={() => toggleComplete(data.id)} type="checkbox" checked={data.completed}/>
      <span style={{textDecoration: data.completed ? 'line-through' : 'none'}}>{data.title} </span>
      <button onClick={() => removeTodo(data.id)}>X</button>
    </div>
  )
}

export default Todo