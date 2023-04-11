import React from "react";

const Formtodo = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <>
      <form className="form">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          placeholder="Tutaj dodaj zadanie"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">Wszystkie</option>
            <option value="completed">Zrobione</option>
            <option value="uncompleted">Nie zrobione</option>
          </select>
        </div>
      </form>
      ;
    </>
  );
};
export default Formtodo;
