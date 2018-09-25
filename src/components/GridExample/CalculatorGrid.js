import * as React from "react";
import styled from "react-emotion";

// Calculator pattern 5
const template = `
  "ii ii ii ii"
  "ac pm pc di"
  "k7 k8 k9 pw"
  "k4 k5 k6 mi"
  "k1 k2 k3 pl"
  "k0 k0 do eq"
`;

const GridLayout = styled("div")`
  display: grid;
  grid-template: ${template};
  grid-gap: 1em;
`;

const Area = styled("div")`
  grid-area: ${props => props.area};
`;

const Calculator = styled("div")`
  background: linear-gradient(0deg, rgba(29, 29, 29, 1) 0%, rgba(70, 70, 70, 1) 100%);
  padding: 1em;
  border-radius: 20px;
  width: fit-content;
  height: max-content;
`;

const Input = styled("input")`
  font-size: 1.8em;
  border-radius: 0.8em;
  outline: none;
  color: white;
  border: 0px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5em 1em;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled("div")`
  background: ${({ color }) => (color === "blue" ? "#1E88E5" : "#757575")};
  border-radius: 22px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2em;
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  min-width: 50px;
  text-align: center;
  user-select: none;
  width: 100%;
  :active {
    transition: transform 0.2s, box-shadow 0.2s;
    transform: translateY(1px);
    /* box-shadow: 1px 8px 20px 0px #666; */
  }
`;

const Numbers = () =>
  [...Array(10)].map((_, i) => (
    <Area area={`k${i}`} key={i}>
      <Button>{i}</Button>
    </Area>
  ));

const operators = [
  { area: "di", mark: "÷" },
  { area: "pw", mark: "×" },
  { area: "mi", mark: "-" },
  { area: "pl", mark: "+" },
  { area: "do", mark: "." },
  { area: "eq", mark: "=" },
  { area: "ac", mark: "AC" },
  { area: "pm", mark: "+/-" },
  { area: "pc", mark: "%" },
];

const Operators = () =>
  operators.map(({ area, mark }) => (
    <Area area={area} key={area}>
      <Button color="blue">{mark}</Button>
    </Area>
  ));

const GridExample = () => (
  <Calculator>
    <GridLayout>
      <Area area="ii">
        <Input />
      </Area>
      <Numbers />
      <Operators />
    </GridLayout>
  </Calculator>
);

export default GridExample;
