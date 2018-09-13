// @flow
import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Ground from "./pages/Ground";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ground">Ground</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/ground" component={Ground} />
    </div>
  </Router>
);

export default App;
