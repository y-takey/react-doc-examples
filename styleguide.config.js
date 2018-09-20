const path = require("path");
const { version } = require("./package");

module.exports = {
  components: "src/components/**/[A-Z]*.js",
  defaultExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/Wrapper")
  },
  require: [path.join(__dirname, "src/App.css")],
  version
};
