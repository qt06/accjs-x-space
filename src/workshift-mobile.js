import {accjsClick, accjsWaitingFocus} from './accjs-constants';
import {workshift as ws} from './workshift/workshift-mobile';
import {accjsMutationObserver} from './functions';
import $ from 'accjs-kit';
window.onerror = function(msg, url, line) {
	alert("error: "+msg+"\r\n line: "+line+"\r\n url: "+url);
	return false;
};

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

accjsMutationObserver(() => {ws();});

