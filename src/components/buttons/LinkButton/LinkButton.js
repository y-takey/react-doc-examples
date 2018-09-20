// @flow
import * as React from "react";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";

type Props = {
  /** ボタンの文字列 */
  text: string,
  /** リンク先のpath */
  path: string
};

const PrimaryButton = ({ text, path }: Props) => (
  <Button type="primary" ghost>
    <Link to={path}>{text}</Link>
  </Button>
);

export default PrimaryButton;
