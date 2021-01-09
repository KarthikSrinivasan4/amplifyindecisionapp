const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            options: {
                // Here you should change 'env' to '@babel/preset-env'
                presets: ['@babel/preset-env']
            }
        }, {
            test: /\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000,
        historyApiFallback: true,
        hot: true
    }
}