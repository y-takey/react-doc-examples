// @flow
import * as React from "react";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";

type Props = {
  text: string,
  path: string
};

const PrimaryButton = ({ text, path }: Props) => (
  <Button type="primary" ghost>
    <Link to={path}>{text}</Link>
  </Button>
);

export default PrimaryButton;
