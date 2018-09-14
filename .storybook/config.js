import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from "@storybook/addon-info";

setOptions({
  name: "Storybook Example",
  sortStoriesByKind: true,
  hierarchySeparator: /\//
});

// loadStoriesより先に設定しないといけない。
setDefaults({
  propTablesExclude: [],
  inline: true
});

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /.stories.js$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
