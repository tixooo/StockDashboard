// eslint-disable

import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin"
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
    entry: './src/index.js',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            'prop-types$': 'prop-types/index.js'
        }
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new ReactRefreshPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        hot: true,
        port: 8080,
        compress: true
    }
}