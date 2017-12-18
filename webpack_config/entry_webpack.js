/**
 * Created by 94216 on 2017/12/2.
 */
const path = require('path');
// 多页面文件列表
const { HTMLDirs } = require("../config/config");
// 入口文件集合
let Entries = {};



HTMLDirs.forEach((page)=>{
	Entries[page] = path.resolve(__dirname, `../src/assets/js/${page}.js`)
});

var vendor = {
	vendor: ['jquery','vue',path.resolve(__dirname, `../src/assets/js/common.js`)]
};
for(var key in vendor){
	Entries[key] = vendor[key];
}
const entry = {};
entry.path = Entries;

module.exports = entry;