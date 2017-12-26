const path = require('path');
const webpack = require('webpack');

const entry = require('./webpack_config/entry_webpack.js');
const modules = require('./webpack_config/module_webpack');
const plugins = require('./webpack_config/plugins_webpack');

/*if (process.env.type=="build"){
	var website = {
		publicPath: "/",
	};
}else {
	var website = {
		publicPath: "http://192.168.2.112:1717/"
	};
}*/
var website = {
	publicPath: "/",
};

module.exports = {
	// 开发工具
	/* 4种模式
	* 1.source-map 打包最慢，最详细（错误信息位置提示：包括行、列），生成独立文件（多人开发，map文件重要适用）
	* 2、cheap-module-source-map 打包速度比上面快（错误信息位置提示：只有行没有列提示），生成独立文件
	* 3，eval-source-map 不生成独立文件，直接在js中，打包速度快，只能用在开发阶段，会有性能问题/安全隐患（上线阶段必须先删除devtool才能打包上线,实用中大型项目）
	* 4.cheap-module-eval-source-map 不生成独立文件，直接在js中，只有列（只在小型项目使用）
	* */
	// devtool: 'eval-source-map',
	entry: entry.path,

	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'assets/js/[name].js',
		publicPath: website.publicPath
	},
	module: { rules: modules.rule },
	plugins: plugins.options,
	devServer: {
		contentBase: path.resolve(__dirname,'dist'),
		host: '192.168.2.112',
		// host: '192.168.16.101',
		compress: true,
		port: 1717
	},
	watchOptions: {
		// 监测时间
		poll: 1000,
		// 防止重复提交
		aggregateTimeout: 500,
		// 不检测的文件夹
		ignored: /node_modules/,
	}
}