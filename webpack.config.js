var path = require("path");
var nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
    bail: true,
    resolve: {
        extensions: ['.ts', '.js', ''],
        root: [
            nodeModulesPath
        ],
        modulesDirectories: [
            'node_modules'
        ]
    },
    module: {
        loaders: [
            { test: /\.ts/, exclude: /node_modules|test/, loaders: ['ts-loader']},
            { test: /Spec\.js$/, loaders: ['webpack-espower-loader', 'babel-loader'] }
        ]
    }
};