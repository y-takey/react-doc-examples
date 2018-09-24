import * as React from "react";
import styled from "react-emotion";

// Basic pattern 1
const template = ["i", "ro", "ha", "ni"].map(area => `[${area}]`).join(" 1fr ");

const GridLayout = styled("div")`
  display: grid;
  grid-template-columns: ${template};
`;

const Area = styled("div")`
  grid-column: ${props => props.area};
`;

const GridExample = () => (
  <GridLayout>
    <Area area="i">い</Area>
    <Area area="ro">ろ</Area>
    <Area area="ha">は</Area>
    <Area area="ni">に</Area>
  </GridLayout>
);

export default GridExample;
