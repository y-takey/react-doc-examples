// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
// import { withState } from "@dump247/storybook-state";
import { BrowserRouter as Router } from "react-router-dom";

import "../App.css";

const Decorator = storyFn => <Router>{storyFn()}</Router>;

const stories = {};

const getStory = category => {
  if (!stories[category])
    stories[category] = storiesOf(category, module).addDecorator(Decorator);
  return stories[category];
};

const styles = stylesheet => ({
  ...stylesheet,
  infoStory: {
    backgroundColor: "#eeeeee",
    padding: 10,
    position: "relative"
  }
});

const addStory = ({
  category,
  title,
  component,
  description = "" /* state, enableInfo = true */
}) => {
  const wrappedComponent = withInfo({ styles, text: description })(
    ({ store }) => component({ store })
  );

  // if (state) wrappedComponent = withState(state)(wrappedComponent);

  getStory(category).add(title, wrappedComponent);
};

export { addStory };
