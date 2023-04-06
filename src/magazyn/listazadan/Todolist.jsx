import React, { useState } from "react";
import "./todoliststyle.css";
import logo from "/public/img/logo.jpg";
import { Helmet } from "react-helmet";
//import components
import Formtodo from "./components/Form";
import List from "./components/List";

export const Zgloszenia = () => {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <Helmet>
        <title>Lista zadań</title>
      </Helmet>
      <div className="container">
        <div id="header">
          <div className="main-logo">
            <a id="logo-main" href="/">
              <img className="logo-main" src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <h1 className="tekstup">Lista zadań do wykonania</h1>
        <Formtodo setInputText={setInputText} />
        <List />
        <footer>
          <p className="autor-main">Made by - Mateusz Trochimowicz</p>
        </footer>
      </div>
    </>
  );
};
