const path = require("path");
const webpack = require("webpack");
const baseManifest = require("./src/manifest.json");
const WebpackExtensionManifestPlugin = require("webpack-extension-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { TimeAnalyticsPlugin } = require("time-analytics-webpack-plugin");

const getModeInfo = (mode) =>
  mode && mode === "development"
    ? { isDevelop: true, mode }
    : { isDevelop: false, mode: "production" };

module.exports = (_, argv) => {
  const { isDevelop, mode } = getModeInfo(argv.mode);

  return TimeAnalyticsPlugin.wrap({
    context: path.resolve(__dirname),
    entry: {
      pageHunter: "./src/pageHunter.ts",
    },
    mode,
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.((js|ts)x?)$/,
          exclude: /(node_modules)/,
          use: {
            loader: "swc-loader",
          },
        },
      ],
    },
    cache: {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
    },
    devtool: isDevelop ? "inline-source-map" : false,
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        __DEV__: isDevelop,
      }),
      new WebpackExtensionManifestPlugin({
        config: {
          base: baseManifest,
        },
      }),
    ],
  });
};
