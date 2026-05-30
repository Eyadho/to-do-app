import {create} from "zustand";
import {persist} from "zustand/middleware";

const useTodoStore = create(persist((set) => ({
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

    addTodo: (title) => {
        if (!title.trim()) {
            alert("Please enter a title");
            return;
        }

        set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: Date.now(),
                    title,
                    completed: false,
                },
            ],
        }))
    },

    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),

    toggleComplete: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo,
            ),
        })),

    updateTodo: (id, newTitle) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? {...todo, title: newTitle} : todo,
            ),
        })),

    clearAllTodos: () =>
        set({
            todos: [],
        }),
}), {
    name: "todos"
}));

export default useTodoStore;
