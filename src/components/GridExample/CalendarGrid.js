import * as React from "react";
import styled from "react-emotion";

// pattern 3 - Calendar
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
