import React from "react";
import Button from "antd/lib/button";

const PrimaryButton = ({ text, block = false, icon, onClick }) => (
  <Button type="primary" block={block} icon={icon} onClick={onClick}>
    {text}
  </Button>
);

export default PrimaryButton;
