const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',
    module: {
        rules: [{
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
                loader: "file-loader"
            },
        ],
    },
    devServer: {
        port: "3000",
        open: true,
        watchFiles: ['src/**/*', 'public/**/*'],
        compress: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
    // メインとなるjsファイル（エントリーポイント）
    entry: './src/index.tsx',

    output: {
        filename: "index.js",
        path: __dirname + ".src/dist"
    },
    // import 文で .ts ファイルを解決するため
    // これを定義しないと import 文で拡張子を書く必要が生まれる。
    // フロントエンドの開発では拡張子を省略することが多いので、
    // 記載したほうがトラブルに巻き込まれにくい。
    resolve: {
        // 拡張子を配列で指定
        extensions: [
            '.ts', '.js', '.tsx'
        ],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        fallback: {
            os: require.resolve("os-browserify/browser"),
            url: require.resolve("url/"),
            crypto: require.resolve("crypto-browserify"),
            https: require.resolve("https-browserify"),
            http: require.resolve("stream-http"),
            assert: require.resolve("assert/"),
            stream: require.resolve("stream-browserify"),
            buffer: require.resolve("buffer"),
            fs: false,
        },
        alias: {
            'superagent-proxy': false,
        }
    },
    target: ['web'],
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Test App',
            favicon: 'public/favicon.ico',
            template: 'public/index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.DefinePlugin({
            "global.GENTLY": false
        }),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: 'static'
        }),
        new Dotenv()
    ],
};