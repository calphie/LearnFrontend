const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});


module.exports = {
    mode: "production",
    entry: {
        javascript: __dirname + "/src/main.js",
    },
    output: {
        path: __dirname + "/build",
        filename:"[name].js"
    },
    devServer: {
        inline: false,
        contentBase: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
            { test: /\.js$/, exclude:/node_modules/, use:['eslint-loader', 'babel-loader']}
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
};