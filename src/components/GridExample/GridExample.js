import * as React from "react";
import styled from "react-emotion";

// https://speakerdeck.com/terrierscript/styled-component-plus-css-grid?slide=82
// https://github.com/terrierscript/css-grid-example/

// const Foo = styled("div")`
//   background-color: #ff00ff;
// `;

// Basic pattern 1
// const template = ["i", "ro", "ha", "ni"].map(area => `[${area}]`).join(" 1fr ");
//
// const GridLayout = styled("div")`
//   display: grid;
//   grid-template-columns: ${template};
// `;
//
// const Area = styled("div")`
//   grid-column: ${props => props.area};
// `;
//
// const GridExample = () => (
//   <GridLayout>
//     <Area area="i">い</Area>
//     <Area area="ro">ろ</Area>
//     <Area area="ha">は</Area>
//     <Area area="ni">に</Area>
//   </GridLayout>
// );

// Card pattern 2
// const template = `
//   "avater name  name  .     .     menu"
//   ".      body  body  body  body  body"
//   ".      com   like  rt    .     ."
// `;
//
// const GridLayout = styled("div")`
//   display: grid;
//   grid-template: ${template};
//   background: white;
//   border-radius: 8px;
//   border: 1px solid #ccc;
//   padding: 0.5em;
//   grid-gap: 0.2em;
// `;
//
// const Area = styled("div")`
//   grid-column: ${props => props.area};
// `;
//
// const GridExample = () => (
//   <GridLayout>
//     <Area area="avater">ava</Area>
//     <Area area="name">name xxxxx xxxxx xxxxx</Area>
//     <Area area="menu">X</Area>
//     <Area area="body">
//       あいうえお、かきくけこ、さしすせそ、たちつてと、なにぬねの、はひふへと、まみむめも
//     </Area>
//     <Area area="com">C</Area>
//     <Area com="like">L</Area>
//     <Area rt="rt">R</Area>
//   </GridLayout>
// );

// pattern 3 - Calendar
const template = `
  "avater name  name  .     .     menu"
  ".      body  body  body  body  body"
  ".      com   like  rt    .     ."
`;

const GridLayout = styled("div")`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-columns: max-content;
  grid-auto-rows: max-content;
  grid-column-gap: 1.5em;
  grid-row-gap: 1em;
  padding: 1.5em;
`;

const WeekdayItem = styled("div")`
  text-align: center;
  color: #160f01;
  font-size: 0.8em;
`;

const WeekdaysHeader = () => (
  <React.Fragment>
    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(weekday => (
      <WeekdayItem key={weekday}>{weekday}</WeekdayItem>
    ))}
  </React.Fragment>
);

const week1 = [null, null, null, null, null, "1", "2"];
const week2 = ["3", "4", "5", "6", "7", "8", "9"];
const week3 = ["10", "11", "12", "13", "14", "15", "16"];
const week4 = ["17", "18", "19", "20", "21", "22", "23"];
const week5 = ["24", "25", "26", "27", "28", "29", "30"];
const week6 = ["31", null, null, null, null, null, null];
const days = [...week1, ...week2, ...week3, ...week4, ...week5, ...week6];

const DayItem = styled("div")`
  text-align: center;
  vertical-align: middle;
  height: 3em;
  line-height: 3em;
  font-size: 1em;
  width: 3em;
  border-radius: 50%;
  color: ${({ color }) => color.fr};
  background-color: ${({ color }) => color.bg};
`;

const colors = {
  sat: { fr: "#ffffff", bg: "#1E88E5" },
  sun: { fr: "#ffffff", bg: "#F4511E" },
};

const Day = ({ date, weekday }) => {
  if (!date) return null;

  const color = weekday === 0 ? colors.sun : weekday === 6 ? colors.sat : {};

  return <DayItem color={color}>{date}</DayItem>;
};

const Days = () => (
  <React.Fragment>
    {days.map((date, i) => (
      <div key={i}>
        <Day date={date} weekday={i % 7} />
      </div>
    ))}
  </React.Fragment>
);

const GridExample = () => (
  <GridLayout>
    <WeekdaysHeader />
    <Days />
  </GridLayout>
);

export default GridExample;
