const merge = require('webpack-merge') // webpack-merge
const common = require('./webpack.common.js') // 汎用設定をインポート

// 本番用
module.exports = merge(common, {
    mode: 'production', // 本番モード
})