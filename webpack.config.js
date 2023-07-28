const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

/* ----------------------- Populate pages and entries ----------------------- */

/**
 * Represents an HTML page.
 */
class Page {
  /**
   * Constructs a {@link Page}.
   *
   * @param name {string} - Name of the page.
   */
  constructor(name) {
    /**
     * Name of the page.
     * @type {string}
     */
    this.name = name;
  }

  /**
   * Absolute path to the page directory.
   */
  get path() {
    return path.join(__dirname, `src/pages/${this.name}`);
  }

  /**
   * Absolute path to the page's entry point.
   */
  get entry() {
    return `${this.path}/entry.ts`;
  }

  /**
   * Absolute path to the page's HTML template.
   */
  get html() {
    return `${this.path}/template.html`;
  }

  /**
   * Page title.
   */
  get title() {
    return `Luiz Fernando — ${this.name}`;
  }
}

const pages = fs
  .readdirSync(path.join(__dirname, "src/pages"))
  .map((name) => new Page(name));

const entries = pages
  .map((page) => ({
    [page.name]: page.entry,
  }))
  .reduce((lhs, rhs) => Object.assign(lhs, rhs));

/* ----------------------------- Create plugins ----------------------------- */

const htmlPlugins = pages.map(
  (page) =>
    new HtmlWebpackPlugin({
      title: page.title,
      template: page.html,
      filename: `${page.name}.html`,
      chunks: [page.name],
    })
);

const cnamePlugin = new CopyPlugin({ patterns: ["CNAME"] });

const plugins = [...htmlPlugins, cnamePlugin];

/* ----------------------------- Webpack config ----------------------------- */

module.exports = {
  mode: "development",
  entry: entries,
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        oneOf: [
          {
            // Imports the CSS as a string
            resourceQuery: /string/,
            use: ["to-string-loader", "css-loader", "sass-loader"],
          },
          {
            // Applies the style sheet to the document
            resourceQuery: /apply/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            // Imports a CSSStyleSheet object
            resourceQuery: /sheet/,
            use: [
              {
                loader: "css-loader",
                options: { exportType: "css-style-sheet" },
              },
              "sass-loader",
            ],
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
      Scripts: path.resolve(__dirname, "src/scripts/"),
      Styles: path.resolve(__dirname, "src/styles/"),
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
