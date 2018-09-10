import React from "react";
import { HotTable } from "@handsontable/react";

import "handsontable/dist/handsontable.full.css";

const data = [
  { id: 1, name: "Tanaka", age: 20, address: "fukuoka" },
  { id: 2, name: "Yamada", age: 31, address: "saga" },
  { id: 3, name: "Sato", age: 42, address: "nagasaki" },
  { id: 4, name: "Suzuki", age: 53, address: "ooita" },
  { id: 5, name: "Yamamoto", age: 64, address: "miyazaki" }
];

const kyushu = [
  "fukuoka",
  "saga",
  "nagasaki",
  "ooita",
  "kumamoto",
  "miyazaki",
  "kagosima"
];

class DataTable extends React.Component {
  state = { data };

  handleChange = (changes, source) => {
    if (!changes) return;

    const newData = [...this.state.data];
    changes.forEach(([rowIndex, propertyNam, oldValue, newValue]) => {
      newData[rowIndex] = {
        ...newData[rowIndex],
        [propertyNam]: `${newValue} edit`
      };
    });
    this.setState({ data: newData });
  };

  render() {
    return (
      <HotTable
        data={this.state.data}
        colHeaders={["Name", "Age", "Address"]}
        columns={[
          { data: "name", type: "text" },
          { data: "age", type: "numeric" },
          { data: "address", type: "dropdown", source: kyushu }
        ]}
        rowHeaders={true}
        width="600"
        height="300"
        stretchH="all"
        afterChange={this.handleChange}
      />
    );
  }
}

export default DataTable;
