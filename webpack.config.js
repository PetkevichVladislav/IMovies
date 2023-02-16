const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.tsx',
    output: {
        path: path.join(__dirname, '/bin'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx|tsx|ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
                resolve: {
                    extensions: [".js", ".json", ".ts", ".tsx"],
                },
            }
        ]
    },
    plugins: 
    [
        new HtmlWebpackPlugin({
            template: './src/index.html'
    })
    ],
}