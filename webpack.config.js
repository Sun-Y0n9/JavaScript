const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	// mode: 'development',
	devtool: 'source-map',
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: '[name]-[hash:5].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: './dist/',
		open: true,
		proxy: {

		},
		port: 8099,
		hot: true,
	},
	module: {
		rules:[
			{
				test: /\.(jpg|png|gif|jpeg)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name]-[hash:7].[ext]',
						outputPath: 'static/img',
						limit: 102400
					}
				}
			}, {
				test: /\.css$/,
				use: [
					'style-loader', 
					{
						loader: 'css-loader',
					},
					'postcss-loader'
				]
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					"presets": [['@babel/preset-env', {
						useBuiltIns: "usage",
			    		corejs: 3
					}]]
				}
			},
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')]
		})
	]
}