import {weekNames} from './constants';
let defaultConfig = {};
Object.keys(weekNames).forEach(function(name) {
	defaultConfig[name] = '';
});

document.addEventListener('DOMContentLoaded', function() {
	// 读取数据，第一个参数是指定要读取的key以及设置默认值
	chrome.storage.sync.get(defaultConfig, function(items) {
let str = '';
		for(let it in defaultConfig) {
str += '<p><label for="' + it + '">' + weekNames[it] + ':</label><input type="text" id="' + it + '" name="' + it + '" value="' + items[it] + '" /></p>';
		}
document.getElementById('options').innerHTML = str;
document.getElementById('app').focus();
	});
});

document.getElementById('save').addEventListener('click', function() {
	for(let it in defaultConfig) {
		let val = document.getElementById(it).value;
			//if(val == '') {
				//continue;
			//}
defaultConfig[it] = val;
	}
	chrome.storage.sync.set(defaultConfig, function() {
		document.title = '保存成功！';
		let status = document.getElementById('status');
status.textContent = '保存成功！';
		status.focus();
	});
});