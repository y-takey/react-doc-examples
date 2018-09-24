import * as React from "react";
import styled from "react-emotion";

// Schedule pattern 4
const flatten = array => [].concat(...array);

const times = flatten(
  [...Array(10)].map((_, i) => {
    const hour = i.toString().padStart(2, "0");
    return ["00", "30"].map(min => ({ hour, min }));
  }),
);

const rowTemplate = ["[t-header]", ...times.map(({ hour, min }) => `[t-${hour}${min}]`)].join(
  " 1fr ",
);

const members = ["taro", "jiro"];
const columns = ["time", ...members];

const schedules = [
  { name: "taro", start: "0200", end: "0230", plan: "walking" },
  { name: "taro", start: "0530", end: "0630", plan: "breakfast" },
  { name: "taro", start: "0600", end: "0730", plan: "news" },
  { name: "jiro", start: "0630", end: "0730", plan: "jump" },
];

const GridLayout = styled("div")`
  display: grid;
  background: white;
  box-sizing: border-box;
  grid-template-columns: [time] 0.5fr ${members.map(mem => `[${mem}]`).join(" 1fr ")} 1fr;
  grid-template-rows: ${rowTemplate};
`;

const Area = styled("div")`
  grid-column: ${props => props.column};
  grid-row: ${({ rowStart, rowEnd }) => (rowEnd ? `t-${rowStart} / t-${rowEnd}` : `t-${rowStart}`)};
`;

const Border = styled(Area)`
  min-height: 3em;
  border-left: solid 1px #eee;
  border-top: ${({ color = "#eee" }) => `solid 1px ${color}`};
`;

const Borders = () =>
  flatten(
    columns.map(column =>
      times.map(({ hour, min }, i) => (
        <Border
          color={min === "00" ? "#333" : "#eee"}
          column={column}
          rowStart={`${hour}${min}`}
          key={`${column}${i}`}
        />
      )),
    ),
  );

const HeaderCell = styled(Area)`
  text-align: center;
  font-weight: bold;
  height: 100%;
`;

const Header = () =>
  members.map(member => (
    <HeaderCell column={member} rowStart="header" key={member}>
      {member}
    </HeaderCell>
  ));

const Times = () =>
  times.map(({ hour, min }, i) => (
    <Area rowStart={`${hour}${min}`} column="time" key={i}>
      &nbsp;
      {hour}:{min}
    </Area>
  ));

const Schedule = styled(Area)`
  background: #429bf4;
  border-radius: 10px;
  font-weight: bold;
  padding: 1em;
  margin: 0.1em 0.5em;
`;

const Schedules = () =>
  schedules.map(({ plan, start: rowStart, end: rowEnd, name: column }, i) => (
    <Schedule {...{ rowStart, rowEnd, column }} key={i}>
      {plan}
    </Schedule>
  ));

const GridExample = () => (
  <GridLayout>
    <Borders />
    <Header />
    <Times />
    <Schedules />
  </GridLayout>
);

export default GridExample;
