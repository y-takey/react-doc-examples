import * as React from "react";
import styled from "react-emotion";

// Card pattern 2
const template = `
  "avater name  name  .     .     menu"
  ".      body  body  body  body  body"
  ".      com   like  rt    .     ."
`;

const GridLayout = styled("div")`
  display: grid;
  grid-template: ${template};
  background: white;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 0.5em;
  grid-gap: 0.2em;
`;

const Area = styled("div")`
  grid-column: ${props => props.area};
`;

const GridExample = () => (
  <GridLayout>
    <Area area="avater">ava</Area>
    <Area area="name">name xxxxx xxxxx xxxxx</Area>
    <Area area="menu">X</Area>
    <Area area="body">
      あいうえお、かきくけこ、さしすせそ、たちつてと、なにぬねの、はひふへと、まみむめも
    </Area>
    <Area area="com">C</Area>
    <Area com="like">L</Area>
    <Area rt="rt">R</Area>
  </GridLayout>
);

export default GridExample;
