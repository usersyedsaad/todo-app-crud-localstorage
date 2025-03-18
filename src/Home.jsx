import React from "react";
import Counter from "./projects/counter/Counter";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Home = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-5xl font-extrabold text-blue-950 line-clamp-6 h-auto p-5">
        Projects
      </h1>
      <Button>
        <Link to={"/counter"}>Counter App</Link>
      </Button>
      <Button>
        <Link to={"/todo-app"}>Todo App</Link>
      </Button>
    </div>
  );
};

export default Home;
