/**
 * Created by 94216 on 2017/12/2.
 */
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const purifyCssPlugin = require('purifycss-webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');

// 多页面文件列表
const { HTMLDirs } = require("../config/config");
// 通过 html-webpack-plugin 生成的 HTML 集合
let HTMLPlugins = [];



HTMLDirs.forEach((page)=>{
	const htmlPlugin = new HTMLWebpackPlugin({
		minify: {
			removeAttributeQuotes: true
		},
		// hash缓存
		hash: true,
		filename: `${page}.html`,
		template: path.resolve(__dirname, `../src/${page}.html`),
		chunks: [page, 'vendor'],
	});
	HTMLPlugins.push(htmlPlugin);
});

const plugins = {};
plugins.options = [
	// js压缩
	// new UglifyJsPlugin(),
	/* 提取公用部分 */
	new webpack.optimize.CommonsChunkPlugin({
		name: ["vendor"],
		filename: "assets/js/[name].js",
		minChunks: 2
	}),
	/* 全局引用第三方库 */
	new webpack.ProvidePlugin({
		$: "jquery",
		'jQuery': "jquery",
		'vue': 'vue'
	}),
	// 生成动态html
	/*new htmlPlugin({
		minify: {
			removeAttributeQuotes: true
		},
		// hash缓存
		hash: true,
		template: './src/index.html'
	}),*/
	...HTMLPlugins,
	// 分离css
	new extractTextPlugin("assets/css/main.css"),
	// 消除无用css
/*	new purifyCssPlugin({
		paths: glob.sync(path.join(__dirname,'../src/!*.html'))
	}),*/
	// 开头注释
	new webpack.BannerPlugin("lym update of "+new Date(new Date().getTime())),
	// 拷贝静态资源
	new copyWebpackPlugin([{
		from: __dirname+"/../src/assets/lib",
		to: './assets/lib'
	}]),
	// 拷贝临时图片文件
	new copyWebpackPlugin([{
		from: __dirname+"/../src/assets/images/temporary",
		to: './assets/images/temporary'
	}])
];
module.exports = plugins;