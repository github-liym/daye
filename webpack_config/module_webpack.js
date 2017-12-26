/**
 * Created by 94216 on 2017/12/2.
 */
const extractTextPlugin = require('extract-text-webpack-plugin');
const modules = {};
modules.rule = [
	{
		test: /\.css$/,
		// css打包进js
		/*use: [
		 { loader: 'style-loader' },
		 { loader: 'css-loader' }
		 ]*/
		/* css 分离打包*/
		use: extractTextPlugin.extract({
			fallback: 'style-loader',
			use: [
				{ loader: 'css-loader' },
				{ loader: 'postcss-loader' },
			]
		})
	},
	{
		// 图片路径
		test: /\.(jpg|jpge|png|gif)/,
		use: [
			{
				loader: 'url-loader',
				options: {
					// 图片小于 5000b 打包成base64
					limit: 5000,
					outputPath: 'assets/images/'
				}
			}
		]
	},
	{
		// html打包
		test: /\.(htm|html)$/i,
		use: [
			{ loader: 'html-withimg-loader'}
		]
	},
	{
		// less编译
		test: /\.less$/,
		/*use: [
		 { loader: 'style-loader' },
		 { loader: 'css-loader' },
		 { loader: 'less-loader' }
		 ]*/
		use: extractTextPlugin.extract({
			fallback: 'style-loader',
			use: [
				{ loader: 'css-loader' },
				{ loader: 'less-loader' },
				{ loader: 'postcss-loader' },
			]
		})
	},
	// scss编译
	{
		test: /\.scss$/,
		use: extractTextPlugin.extract({
			fallback: 'style-loader',
			use: [
				{ loader: 'css-loader' },
				{ loader: 'sass-loader' },
				{ loader: 'postcss-loader' },
			]
		})
	},
	{
		test: /\.(jsx|js)$/,
		use: {
			loader: 'babel-loader',
		},
		exclude: /node_modules/
	},
	{
		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		use: [
			{
				loader: 'file-loader',

				options: {
					outputPath: 'assets/fonts/',
					name: '[name].[ext]'
				}
			}
		]
	},
	{
		test: /\.(woff|woff2)$/,
		use: [
			{
				loader: 'url-loader',
				options: {
					prefix: 'font/',
					limit: 5000,
					outputPath: 'assets/fonts/',
					name: '[name].[ext]'
				}
			}
		]
	},
	{
		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		use: [
			{
				loader: 'url-loader',
				options: {
					limit: 10000,
					mimetype: 'application/octet-stream',
					outputPath: 'assets/fonts/',
					name: '[name].[ext]'
				}
			}
		]
	},
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		use: [
			{
				loader: 'url-loader',
				options: {
					limit: 10000,
					mimetype: 'image/svg+xml',
					outputPath: 'assets/fonts/',
					name: '[name].[ext]'
				}
			}
		]
	}

];
module.exports = modules;