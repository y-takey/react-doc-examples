// @flow
import * as React from "react";
import { Row, Col } from "antd";

import PrimaryButton from "../components/buttons/PrimaryButton";
import LinkButton from "../components/buttons/LinkButton";

const GutterRow = ({ children }) => (
  <Row gutter={16} style={{ margin: 20 }}>
    {children}
  </Row>
);

const Home = () => (
  <div>
    <h3>This is Home</h3>
    <PrimaryButton
      text="foo"
      onClick={() => console.log("primary button clicked.")}
    />
    <GutterRow>
      <Col span={6} offset={6}>
        <LinkButton text="Storybook" path="http://localhost:9009" />
      </Col>
      <Col span={6}>
        <LinkButton text="Styleguidist" path="http://localhost:9009" />
      </Col>
    </GutterRow>
    <GutterRow>
      <Col span={6} offset={6}>
        <LinkButton text="docz" path="http://localhost:9009" />
      </Col>
      <Col span={6}>
        <LinkButton text="Display Window" path="http://localhost:9009" />
      </Col>
    </GutterRow>
  </div>
);

export default Home;
