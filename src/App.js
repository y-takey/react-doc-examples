import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import DataTable from "./components/DataTable";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DataTable />
      </div>
    );
  }
}

export default App;
