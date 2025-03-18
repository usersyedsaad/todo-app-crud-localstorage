import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

const TodoApp = () => {
  const [inputValue, setInputValue] = React.useState("");
  const todos = useSelector((state) => state.todo.todos);

  // ✅ Save todos to localStorage whenever the todos state changes
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-blue-950 text-white flex-col gap-10">
      <TodoInput inputValue={inputValue} setInputValue={setInputValue} />
      <ul className="gap-4 flex flex-col ">
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo.todo}
            isEditable={todo.isEditable}
            id={todo.id}
            setInputValue={setInputValue}
            inputValue={inputValue}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
