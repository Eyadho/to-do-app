import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [
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
  ],

  addTodo: (title) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          title,
          completed: false,
        },
      ],
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  toggleComplete: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),

  updateTodo: (id, newTitle) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    })),

  clearAllTodos: () =>
    set({
      todos: [],
    }),
}));

export default useTodoStore;
