const path = require("path");
const webpack = require("webpack");
module.exports = {
    mode: "production",
    entry: {
        javascript: __dirname + "/src/main.js",
        html: __dirname + '/src/index.html'
    },
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devServer: {
        inline: false,
        contentBase: path.resolve(__dirname,"dist"),
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    }
}