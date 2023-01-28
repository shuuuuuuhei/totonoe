const {
    merge
} = require('webpack-merge') // webpack-merge
const common = require('./webpack.common.js') // 汎用設定をインポート
const webpack = require('webpack');
const path = require("path");

// 開発用
module.exports = merge(common, {
    mode: 'development', // 開発モード

    devServer: {
        port: "3000",
        open: true,
        watchFiles: ['src/**/*', 'public/**/*'],
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
        historyApiFallback: true,
    },
})