import React from "react";
// Import Components
import Todo from "./Todo";
const List = () => {
  return (
    <div className="todo-cointainer">
      <ul className="todo-list">
        <Todo />
      </ul>
    </div>
  );
};

export default List;
