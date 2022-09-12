import React from "react";
import logo from "./logo.svg";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import { Button } from "./components/atom/button/Button";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Epilogue', sans-serif;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
