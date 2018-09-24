import * as React from "react";

// https://speakerdeck.com/terrierscript/styled-component-plus-css-grid?slide=82
// https://github.com/terrierscript/css-grid-example/
import BasicGrid from "./BasicGrid";
import CardGrid from "./CardGrid";
import CalendarGrid from "./CalendarGrid";
import ScheduleGrid from "./ScheduleGrid";

const GridExample = () => (
  <div style={{ padding: 32 }}>
    <hr />
    <h3>Basic</h3>
    <BasicGrid />
    <hr />
    <h3>Card</h3>
    <CardGrid />
    <hr />
    <h3>Calendar</h3>
    <CalendarGrid />
    <hr />
    <h3>Schedule</h3>
    <ScheduleGrid />
  </div>
);

export default GridExample;
