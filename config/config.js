/**
 * Created by 94216 on 2017/12/5.
 */
const path = require('path');
const glob = require('glob');
var file = glob.sync(path.join(__dirname,'../src/*.html'));
var dirs = [];
file.forEach((page,i)=>{
	page = page.substr(page.lastIndexOf('/')+1);
	page=page.substr(0,page.lastIndexOf('.'));
	dirs.push(page);
});

module.exports = {
	HTMLDirs: dirs
};

