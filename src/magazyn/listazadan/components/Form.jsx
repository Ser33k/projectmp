import React from "react";

const Formtodo = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <form className="form">
        <input
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          placeholder="Tutaj dodaj zadanie"
        />
        <button className="todo-button" type="submit">
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
