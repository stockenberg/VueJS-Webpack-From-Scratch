const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.min.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },

    module: {
        rules: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.css$/, use: ['vue-style-loader', 'css-loader']}
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // new HtmlWebpackPlugin(
        //     {
        //         template: 'index.html',
        //         filename: 'index.html',
        //         inject: true
        //     })
    ]

}