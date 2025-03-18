import { createSlice } from "@reduxjs/toolkit";

// ✅ Step 1: Load todos from localStorage on initial state
const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: storedTodos,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    delTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          // ✅ Update todo text and isEditable status if provided
          return {
            ...todo,
            todo:
              action.payload.todo !== undefined
                ? action.payload.todo
                : todo.todo,
            isEditable:
              action.payload.isEditable !== undefined
                ? action.payload.isEditable
                : todo.isEditable,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, delTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
