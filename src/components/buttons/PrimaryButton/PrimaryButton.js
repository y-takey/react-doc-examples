// @flow
import React from "react";
import Button from "antd/lib/button";

type Props = {
  text: string,
  block?: boolean,
  icon?: "plus" | "edit" | "search",
  onClick: Function
};

const PrimaryButton = ({ text, block = false, icon, onClick }: Props) => (
  <Button type="primary" block={block} icon={icon} onClick={onClick}>
    {text}
  </Button>
);

export default PrimaryButton;
