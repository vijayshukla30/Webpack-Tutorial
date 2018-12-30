const path = require("path");

module.exports = {
  entry: {
    main: ["./src/index.js"]
  },
  mode: "development", //mode for the build
  output: {
    filename:"[name]-bundle.js", //name of the build file
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/" //path from js file will be load
  },
  devServer: {
    contentBase: "dist"  //Content will be loded from
  }
}
