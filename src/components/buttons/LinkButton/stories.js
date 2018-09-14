// @flow
import * as React from "react";

import { addStory } from "../../../stories/utils";
import Component from "./index";

addStory({
  category: "Button",
  title: "LinkButton",
  component: () => <Component text="storybook" path="/dummy" />
});
