const path = require("path");
const webpack = require("webpack");
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
    module: {},
    plugins: [HTMLWebpackPluginConfig]
}