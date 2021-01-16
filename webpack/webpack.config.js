const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let devMode = false;

module.exports = {
    // mode: 'development', 
    mode: 'production',
    entry: ['./script.js'],
    output: {
        filename: devMode ? '[name].js' : '[contenthash]_[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    context: path.resolve(__dirname, 'src'),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.json'],
        alias: {'@assets': path.resolve(__dirname, 'src/assets')}
    },

        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
                filename: devMode ? '[name].html' : '[contenthash]_[name].html',
            }) //in production mode automatically minified
          ]
}