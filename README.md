# Templates of config files
     
My templates for bundler/builder config files
    

## Webpack

#### Packages:
- [webpack](https://webpack.js.org/ "Webpack") and [webpack-cli](https://www.npmjs.com/package/webpack-cli "Webpack CLI") 
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server "Webpack development server") provides live reloading. It uses webpack-dev-middleware under the hood, which provides fast in-memory access to the webpack assets.
- Cross-env 
- Babel
- ESLint 
- Bundle analyzer

#### Plugins:
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options "HTML Webpack plugin") simplifies creation of HTML files to serve your webpack bundles. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates, or use your own loader.
- [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/ "Copy Webpack plugin") copies individual files or entire directories, which already exist, to the build directory.
- [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin "Clean plugin for Webpack") will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
- [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/ "Mini CSS extract plugin") extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
- [css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/ "CSS Minimizer webpack plugin") uses cssnano to optimize and minify your CSS.
- [terser-webpack-plugin](https://www.npmjs.com/package/terser-webpack-plugin "Terser webpack plugin")  to minify your JavaScript.If you are using webpack v5 or above you do not need to install this plugin. Webpack v5 comes with the latest terser-webpack-plugin out of the box.

#### Loaders
- [css-loader](https://webpack.js.org/loaders/css-loader/ "CSS loader")
- [style-loader](https://webpack.js.org/loaders/style-loader/ "Style loader") inject CSS into the DOM. I currently changed settings to use [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/ "Mini CSS extract plugin") to extract CSS into separate file instead.
- [file-loader](https://webpack.js.org/loaders/file-loader/ "File loader") resolves import/require() on a file into a url and emits the file into the output directory.
- csv-loader
- xml-loader
- less-loader
- sass-loader

Full list of dependencies in package.json

    
## Gulp