import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import DataTable from "./components/DataTable";
import PrimaryButton from "./components/buttons/PrimaryButton";

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
        <PrimaryButton
          text="foo"
          onClick={() => console.log("primary button clicked.")}
        />
      </div>
    );
  }
}

export default App;
