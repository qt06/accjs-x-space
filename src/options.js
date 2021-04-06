import {hotkeyLabels, hotkeyConfig} from './constants';
let str = '<h3>主要快捷键说明如下（您也可以自己在扩展选项的快捷键设置里进行修改）：</h3><ul>';
for(let it in hotkeyConfig) {
str += '<li>' + hotkeyLabels[it] + "： " + hotkeyConfig[it] + '</li>';
}
str += '</ul>';
document.getElementById('hotkeys').innerHTML  = str;
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('app').focus();
});
