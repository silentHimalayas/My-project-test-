const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

console.log(__dirname, __filename, '>>>>>>>>>dir,filename');

module.exports = {
   entry: {
       app: './index.js'
   },

   context: path.resolve(__dirname, '../'),

   output: {
        filename: 'static/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/' 
   },

   devServer: {
       contentBase: path.join(__dirname, 'dist'),
       openPage: '',
       open: true,
       port: 9002
   },

   module: {
       rules: [
           {
               test: /\.js$/,
               use: 'babel-loader',
               exclude: /node_modules/
           },
           {
               test: /\.vue$/,
               use: 'vue-loader'
           }
       ]
   },
   plugins: [
        new htmlWebpackPlugin({
            template: './view/index.html',
            filename: './index.html'
            //inject: true
        })
   ]

}