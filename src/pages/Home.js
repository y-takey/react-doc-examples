// @flow
import * as React from "react";

import PrimaryButton from "../components/buttons/PrimaryButton";

const Home = () => (
  <div>
    <h3>This is Home</h3>
    <PrimaryButton
      text="foo"
      onClick={() => console.log("primary button clicked.")}
    />
  </div>
);

export default Home;
