export default {
  wrapper: "src/docz/Wrapper",
  modifyBundlerConfig: config => {
    console.log("extensions:", config.resolve.extensions.join(", "));
    config.resolve.extensions.push(".css");
    // , "sass-loader"
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    });

    return config;
  }
};
