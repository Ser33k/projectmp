import React from "react";
import "./todoliststyle.css";
import logo from "/public/img/logo.jpg";

export const Zgloszenia = () => {
  return (
    <div className="container">
      <div id="header">
        <div className="main-logo">
          <a id="logo" href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
      </div>
      <h1 className="tekstup">Lista niezgodności</h1>
      <form>
        <input
          type="text"
          className="todo-input"
          placeholder="Tutaj dodaj niezgodność"
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
      <div className="todo-container">
        <ul className="todo-list"></ul>
      </div>
      <footer>
        <p className="autor">Made by - Mateusz Trochimowicz</p>
      </footer>
    </div>
  );
};
