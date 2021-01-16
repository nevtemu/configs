const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
let devMode = false;

const filename = (name, ext) => devMode ? `${name}.${ext}` : `[contenthash]_${name}.${ext}`

module.exports = {
    mode: 'development', 
    // mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: ['./script.js'],
    output: {
        filename: filename('script', 'js',),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.json'],
        alias: {
          Assets: path.resolve(__dirname, 'assets'),
        //   : path.resolve(__dirname, ''),
        //   : path.resolve(__dirname, ''),
        }
      },

        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
                filename: filename('index', 'html'),
            }), //in production mode automatically minified
            new CopyPlugin({
                patterns: [
                  { from: "assets", to: `assets/${filename(`[name]`,`[ext]`)}` },//from src/assets to dist/assets
                //   { from: "", to: "" },
                //   { from: "", to: "" },
                ],
              }),
        
        ]
}