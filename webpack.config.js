const nodeExternals = require("webpack-node-externals");

module.exports = [
  {
    mode: "development",
    target: "node",
    externals: [nodeExternals()],
    devtool: "cheap-module-source-map",
    output: {
      path: `${__dirname}/lib`,
      filename: "index.js",
      libraryTarget: "umd",
      // https://github.com/webpack/webpack/issues/3929#issuecomment-306063585
      libraryExport: "default"
    }
  }
];
