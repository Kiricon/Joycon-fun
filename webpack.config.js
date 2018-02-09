const path = require('path');
module.exports = {
    entry: "./main.js",
    output: {
        path: path.join(__dirname),
        filename: "bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./')
          ]
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 3000
      },
    watch: true
}