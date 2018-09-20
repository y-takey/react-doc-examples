// @flow
import * as React from "react";
import { text } from "@storybook/addon-knobs";

import { addStory } from "../../../stories/utils";
import Component from "./index";

addStory({
  category: "Button",
  title: "LinkButton",
  component: () => (
    <Component text={text("Text", "storybook")} path={text("Path", "/dummy")} />
  )
});
