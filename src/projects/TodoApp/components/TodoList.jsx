import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Save, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { delTodo, updateTodo } from "../../../features/counter/todoSlice";

const TodoList = ({ todo, isEditable, id, inputValue, setInputValue }) => {
  const dispatch = useDispatch();

  // ✅ Delete todo
  const HandleDelete = () => {
    dispatch(delTodo({ id }));
  };

  // ✅ Toggle edit mode
  const HandleUpdatable = () => {
    setInputValue(todo); // Set inputValue to existing todo text when entering edit mode
    dispatch(updateTodo({ id, isEditable: true }));
  };

  // ✅ Save updated todo
  const HandleUpdate = () => {
    if (inputValue.trim() === "") return;
    dispatch(updateTodo({ id, todo: inputValue, isEditable: false }));
    setInputValue("");
  };

  return (
    <li className="flex gap-2 p-4 items-center border-1 border-white">
      <Input
        onChange={(e) => {
          if (isEditable) setInputValue(e.target.value);
        }}
        value={isEditable ? inputValue : todo}
        readOnly={!isEditable}
      />

      {isEditable ? (
        <Button
          className="bg-transparent"
          onClick={HandleUpdate}
          variant="outline"
        >
          <Save />
        </Button>
      ) : (
        <Button
          className="bg-transparent"
          onClick={HandleUpdatable}
          variant="outline"
        >
          <Pencil />
        </Button>
      )}

      <Button
        className="bg-transparent"
        onClick={HandleDelete}
        variant="outline"
      >
        <Trash2 />
      </Button>
    </li>
  );
};

export default TodoList;
