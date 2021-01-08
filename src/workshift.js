import {accjsCheckbox, accjsAutoChecked} from './accjs-constants';
import {workshift as ws} from './workshift/workshift';
import {accjsMutationObserver, snd} from './functions';
import $ from 'accjs-kit';
window.onerror = function(msg, url, line) {
	alert("error: "+msg+"\r\n line: "+line+"\r\n url: "+url);
	return false;
};
let isAutoRefresh = true;
function shuaxin() {
if(isAutoRefresh && window.location.hash.includes('system/workshift')) {
snd('begin.mp3');
let refresh = $('div.app-workshift-refresh');
if(refresh.length > 0) {
refresh.get(0).click();
getResult();
}
}
}
function getResult() {
setTimeout(function() {
let cs = $('div.app-workshift-data-table .table-body input[data-' + accjsCheckbox + ']');
if(cs.length > 0) {
snd('find.mp3');
cs[0].focus();
isAutoRefresh = false;
} else {
setTimeout(function() {
shuaxin();
},500);
}
}, 1500);
}
function qb() {
if(window.location.hash.includes('system/workshift')) {
snd('check.mp3');
if($('div.app-workshift-data-table .table-body input[data-' + accjsAutoChecked + ']').each(function() {
!this.checked && this.click();
}).length > 0) {
$('button').each(function() {
if(this.innerText.includes('提交选班')) {
this.click();
return false;
}
});

snd('submit1.mp3');
//alert('ok');
}
}
//end qb
}

Mousetrap.bind('a q', function() {
qb();
return false;
});
Mousetrap.bind('a a', function() {
if(window.location.hash.includes('system/workshift')) {
if(isAutoRefresh) {
isAutoRefresh = false;
} else {
isAutoRefresh = true;
shuaxin();
return false;
}
} else {
isAutoRefresh = ffalse;
}
});

accjsMutationObserver(() => {
if(window.location.hash.includes('system/workshift')) {
ws();
}
});

