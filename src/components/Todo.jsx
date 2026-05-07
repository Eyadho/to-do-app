function Todo({data}) {
  return (
    <div className="todo">
      <input type="checkbox" />
      <span>{data.title}</span>
      <button>X</button>
    </div>
  )
}

export default Todo