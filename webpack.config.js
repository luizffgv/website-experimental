const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const pages = ["index", "social"];
const htmlplugins = [];
const entries = {};

pages.forEach((page) => {
  [".js", ".ts", ".tsx"].forEach((ext) => {
    const file = path.resolve(__dirname, "src/scripts", page + ext);
    if (fs.existsSync(file)) entries[page] = file;
  });

  htmlplugins.push(
    new HtmlWebpackPlugin({
      title: page,
      template: path.resolve(__dirname, `src/${page}.html`),
      filename: page + ".html",
      chunks: [page],
    })
  );
});

module.exports = {
  mode: "development",
  entry: entries,
  plugins: [
    htmlplugins,
    new CopyPlugin({
      patterns: ["CNAME"],
    }),
  ].flat(),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        oneOf: [
          {
            test: /[^_].*\.s[ac]ss$/i,
            use: ["to-string-loader", "css-loader", "sass-loader"],
            include: [path.resolve(__dirname, "src/sass/components/")],
          },
          {
            test: /[^_].*\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, "src/sass/"),
    },
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
