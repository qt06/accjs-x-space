import {hotkeyConfig, hotkeySelectorConfig} from './constants';
import {accjsClick, accjsWaitingFocus} from './accjs-constants';
import workBenchProcess from './workbench/index';
import {accjsMutationObserver, registerHotkey, waitingFocus } from './functions';
import $ from 'accjs-kit';
	document.title = document.title + ' - ' + chrome.i18n.getMessage('pluginHasAcc');
window.onerror = function(msg, url, line) {
	alert("error: "+msg+"\r\n line: "+line+"\r\n url: "+url);
	return false;
};
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

accjsMutationObserver(workBenchProcess);

