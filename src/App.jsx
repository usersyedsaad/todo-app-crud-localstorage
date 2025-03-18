import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Counter from "./projects/counter/Counter";
import TodoApp from "./projects/TodoApp/TodoApp";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo-app" element={<TodoApp />} />
        </Routes>
      </div>
      <Toaster />
    </>
  );
};

export default App;
