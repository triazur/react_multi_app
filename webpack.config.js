var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    mode: 'production',
    entry: {
        'app1': './frontend/app1/index.js',
        'app3': './frontend/app3/index.js'
    },
    output: {
        path: __dirname,
        filename: "frontend/[name]/build/bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: false,
            chunks: ['app1'],
            template:'frontend/app1/index.html',
            filename: 'frontend/app1/build/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            chunks: ['app3'],
            template:'frontend/app3/index.html',
            filename: 'frontend/app3/build/index.html'
        }),
        new LiveReloadPlugin()
    ]
}