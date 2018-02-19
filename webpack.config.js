const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const APP_DIR = path.resolve(__dirname, 'src/app');
const TSLINT_CONFIG = require('./tslint.json');

const config = {
	entry: SRC_DIR + '/app.ts',
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.css', '.scss']
	},
	plugins: [
		new CleanWebpackPlugin([BUILD_DIR]),
		new HtmlWebpackPlugin({
			template: SRC_DIR + '/index.html'
		}),
		new ExtractTextPlugin('styles.css')
	],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	node: {
		dns: 'mock',
		net: 'mock'
	},
	module: {
		rules: [
			{
				test: /\.tsx|\.ts/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
                test: /\.tsx|\.ts/,
				exclude: /node_modules/,
                loader: 'tslint-loader',
                options: TSLINT_CONFIG
            },
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'style-loader'
				})
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist')
	}
};

module.exports = config;
