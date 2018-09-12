import React from "react";
import styled from "react-emotion";

const Button = styled("button")`
  background-color: #1e88e5;
  border-color: #1e88e5;
  border-radius: 0.75em;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.5em;
  outline: 0;
  padding: 0px 10px;
  user-select: none;
`;

const PrimaryButton = ({ text, onClick }) => (
  <Button onClick={onClick}>{text}</Button>
);

export default PrimaryButton;
