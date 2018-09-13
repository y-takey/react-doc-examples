// @flow
import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "antd/lib/layout";

import Home from "./pages/Home";
import Ground from "./pages/Ground";
import "./App.css";

const App = () => (
  <Router>
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider theme="light">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ground">Ground</Link>
          </li>
        </ul>
      </Layout.Sider>
      <Layout>
        <Layout.Content style={{ margin: "24px 16px 0" }}>
          <Route exact path="/" component={Home} />
          <Route path="/ground" component={Ground} />
        </Layout.Content>
      </Layout>
    </Layout>
  </Router>
);

export default App;
