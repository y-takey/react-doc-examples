import * as React from "react";

// https://speakerdeck.com/terrierscript/styled-component-plus-css-grid?slide=82
// https://github.com/terrierscript/css-grid-example/
import BasicGrid from "./BasicGrid";
import CardGrid from "./CardGrid";
import CalendarGrid from "./CalendarGrid";

const GridExample = () => (
  <div>
    <hr />
    <h3>Basic</h3>
    <BasicGrid />
    <hr />
    <h3>Card</h3>
    <CardGrid />
    <hr />
    <h3>Calendar</h3>
    <CalendarGrid />
  </div>
);

export default GridExample;
