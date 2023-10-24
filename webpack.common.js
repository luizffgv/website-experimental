const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const scriptsPath = path.join(__dirname, "src/scripts");
const globalScriptsPath = path.join(scriptsPath, "global");

/**
 * Name of the global entry point.
 */
const globalEntryName = "global";

/**
 * Scripts that will run before any other entries in all non-isolated pages.
 */
const globalScripts = fs
  .readdirSync(globalScriptsPath)
  .map((script) => path.join(globalScriptsPath, script));

/* ----------------------- Populate pages and entries ----------------------- */

/**
 * Represents an HTML page.
 */
class Page {
  /**
   * Whether the page includes the global entries.
   *
   * @type {boolean}
   */
  #isolated;

  /**
   * Constructs a {@link Page}.
   *
   * @param {string} name - Name of the page.
   * @param {boolean} [isolated] - Whether the page includes the global scripts.
   */
  constructor(name, isolated) {
    /**
     * Name of the page.
     * @type {string}
     */
    this.name = name;

    this.#isolated = !!isolated;
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

  /**
   * Page chunks.
   */
  get chunks() {
    const chunks = [];
    if (!this.#isolated) chunks.push(globalEntryName);
    chunks.push(this.name);

    return chunks;
  }
}

const pages = fs
  .readdirSync(path.join(__dirname, "src/pages"))
  .map((name) => new Page(name));

/**
 * @type {{[name: string]: import("webpack").Entry}}
 */
const entries = pages
  .map((page) => ({
    [page.name]: page.entry,
  }))
  .reduce((lhs, rhs) => Object.assign(lhs, rhs));

if (entries[globalEntryName] != undefined)
  throw new Error(
    `Entry "${globalEntryName}" is already defined. Do not use "${globalEntryName}" as a page name.`
  );

entries[globalEntryName] = globalScripts;

/* ----------------------------- Create plugins ----------------------------- */

const htmlPlugins = pages.map(
  (page) =>
    new HtmlWebpackPlugin({
      title: page.title,
      template: page.html,
      filename: `${page.name}.html`,
      chunks: page.chunks,
      chunksSortMode: "manual",
    })
);

const cnamePlugin = new CopyPlugin({ patterns: ["CNAME"] });

const assetsPlugin = new CopyPlugin({
  patterns: [{ from: "src/assets", to: "assets" }],
});

const plugins = [...htmlPlugins, cnamePlugin, assetsPlugin];

/* ----------------------------- Webpack config ----------------------------- */

module.exports = {
  mode: "development",
  optimization: {
    runtimeChunk: "single",
  },
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
      RaiarComponents: path.resolve(__dirname, "raiar/components/"),
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
