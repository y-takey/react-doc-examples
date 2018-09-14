// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";

import { addStory } from "../../../stories/utils";
import Component from "./index";

addStory({
  category: "Button",
  title: "PrimaryButton",
  component: () => <Component text="storybook" onClick={action("clicked")} />
});
