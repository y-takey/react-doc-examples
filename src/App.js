// @flow
import * as React from "react";
import styled from "react-emotion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "antd/lib/layout";

import Home from "./pages/Home";
import Ground from "./pages/Ground";
import LinkButton from "./components/buttons/LinkButton";
import "./App.css";

const Menu = styled("ul")`
  list-style-type: none;
  padding: 20px;

  li {
    margin-bottom: 20px;
  }
`;

const App = () => (
  <Router>
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider theme="light">
        <Menu>
          <li>
            <LinkButton text="Home" path="/" />
          </li>
          <li>
            <LinkButton text="Ground" path="/ground" />
          </li>
        </Menu>
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
