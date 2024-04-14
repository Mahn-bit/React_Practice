import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

interface TodoState {
  todos: Record<string, Todo>;
  toggleTodo: (todoId: string) => void;
}

const useTodoStore = create<TodoState>()(
  immer((set) => ({
    todos: {
      "82471c5f-4207-4b1d-abcb-b98547e01a3e": {
        id: "82471c5f-4207-4b1d-abcb-b98547e01a3e",
        title: "Learn Zustand",
        done: true,
      },
      "354ee16c-bfdd-44d3-afa9-e93679bda367": {
        id: "354ee16c-bfdd-44d3-afa9-e93679bda367",
        title: "Learn Jotai",
        done: false,
      },
      "771c85c5-46ea-4a11-8fed-36cc2c7be344": {
        id: "771c85c5-46ea-4a11-8fed-36cc2c7be344",
        title: "Learn Valtio",
        done: false,
      },
      "363a4bac-083f-47f7-a0a2-aeeee153a99c": {
        id: "363a4bac-083f-47f7-a0a2-aeeee153a99c",
        title: "Learn Signals",
        done: false,
      },
    },

    toggleTodo: (todoId) =>
      set((state) => {
        state.todos[todoId].done = !state.todos[todoId].done;
      }),
  }))
);
