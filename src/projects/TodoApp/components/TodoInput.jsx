import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../features/counter/todoSlice";

const TodoInput = ({ inputValue, setInputValue }) => {
  const dispatch = useDispatch();

  const ClickHandler = () => {
    if (inputValue.trim() === "") return;
    dispatch(addTodo({ id: Date.now(), todo: inputValue, isEditable: false }));
    setInputValue("");
  };

  return (
    <div className="flex items-center gap-2 border-2 rounded-2xl p-2">
      <Input
        style={{ border: "none", outline: "none" }}
        className="border-none outline-none focus:border-none focus:outline-none"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        placeholder="Add Todo"
      />

      <Button
        className="bg-transparent"
        onClick={ClickHandler}
        variant="outline"
      >
        Add
      </Button>
    </div>
  );
};

export default TodoInput;
