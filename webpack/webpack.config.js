const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let devMode = true;

const filename = (name, ext) => devMode ? `${name}.${ext}` : `[contenthash]_${name}.${ext}`

module.exports = {
    mode: 'development', 
    // mode: 'production',
    entry: ['./script.js'],
    output: {
        filename: filename('script', 'js',),
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
                filename: filename('index', 'html'),
            }) //in production mode automatically minified
          ]
}