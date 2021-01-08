import {hotkeyConfig, hotkeySelectorConfig} from './constants';
import {accjsClick, accjsWaitingFocus, accjsCheckbox, accjsAutoChecked} from './accjs-constants';
import workBenchProcess from './workbench/index-full';
import {accjsMutationObserver, registerHotkey, waitingFocus, snd} from './functions';
import $ from 'accjs-kit';

let isAutoRefresh = false;

window.onerror = function(msg, url, line) {
	alert("error: "+msg+"\r\n line: "+line+"\r\n url: "+url);
	return false;
};

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
this.focus();
return false;
}
});

snd('submit4.mp3');
//alert('ok');
}
}
//end qb
}
document.body.addEventListener('keyup', (e)=> {
if(e.keyCode == 9) {
e.stopPropagation();
}
},null);

$(document).on('keydown', 
'.' + accjsClick, 
function(e) {
if(e.which === 13 || e.which === 32) {
this.click();
//maybe need auto focus
if(this.hasAttribute('data-' + accjsWaitingFocus)) {
waitingFocus(this.getAttribute('data-' + accjsWaitingFocus));
}
}
});
	chrome.storage.sync.get(hotkeyConfig, function(items) {
		for(let it in items) {
			if(it == 'first_member') {
Mousetrap.bind(items[it], function() {
let m = $('.chat-contact-item');
if(m.length > 0) {
m[0].focus();
}
return false;
});
			} else if(it == 'last_message') {
Mousetrap.bind(items[it], function() {
let m = $('.chat-message, .chat-system-message');
if(m.length > 0) {
for(let pos = m.length - 1;pos >= 0; pos--) {
if($.isVisible(m[pos])) {
m[pos].focus();
return false;
}
}
}
return false;
});
  			} else if(it == 'yw') {
  Mousetrap.bind(items[it], function() {
  $('.ant-tabs-tab').each(function() {
  if(this.innerText.includes('业务视图')) {
  this.focus();
  this.click();
setTimeout(function() {
$('.app-business-view .ant-menu .ant-menu-submenu span span').addClass(accjsClick).attr({
"tabindex": "0",
"role": "button"
}).each(function() {
  if($.isVisible(this) && this.innerText.includes('规则')) {
this.focus();
  this.click();
setTimeout(function() {
$('.ant-menu-submenu-popup [viewcode="punishView"]').each(function() {
this.click();
setTimeout(function() {
let gs = $('.punishResultGrid .ant-table-tbody');
for(let pos = gs.length -1; pos >= 0; pos--) {
if($.isVisible(gs[pos])) {
$(gs[pos]).attr("tabindex", "-1");
gs[pos].focus();
}
}
}, 300);
return false;
});
}, 500);
return false;
  }
  });
}, 600);
  //waitingFocus('.ant-menu .ant-menu-submenu');
  return false;
  }
  });
  });
			} else if(it == 'fc') {
Mousetrap.bind(items[it], function() {
$('.ant-tabs-tab').each(function() {
if(this.innerText.includes('方寸')) {
this.focus();
this.click();
waitingFocus('.recommend-list');
return false;
}
});
});
			} else if(it == 'try_to_locate') {
Mousetrap.bind(items[it], function() {
$(hotkeySelectorConfig['search_input'][0]).each(function() {
let val = '';
if($.isVisible(this)) {
val = this.value;
let ts = $('.question-item-title'); //, .ah-solution-components-search--search .ah-solution-components-question--title');
for(let i = 0, len = ts.length; i < len; i++) {
if(ts[i].innerText.includes(val)) {
ts[i].focus();
return false;
}
}
}
});
return false;
});
			} else if(it == 'auto_fill') {
Mousetrap.bind(items[it], function() {
let ae = document.activeElement;
if(ae !== null) {
let inputs = $('label input[id*=so], span.ant-input-search input[type=text]');
inputs.each(function() {
if($.isVisible(this)) {
this.value = ae.innerText;
this.focus();
}
});
}
});
			} else {
				registerHotkey(items[it], ...hotkeySelectorConfig[it]);
			}
		}
	});


Mousetrap.bind('a q', function() {
qb();
return false;
});
/**
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
*/

accjsMutationObserver(workBenchProcess);

