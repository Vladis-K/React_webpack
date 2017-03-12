const path = require('path');

module.exports = {
    entry: {
        app: ["./js/main.js"]
    },
    output: {
        path: path.resolve(__dirname, "app"),
        publicPath: "/app/",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};