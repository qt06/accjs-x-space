import {accjsClick, accjsHas, accjsWaitingFocus } from '../accjs-constants';
import $ from 'accjs-kit';
//ticket
const ticket = function() {
$('tr').not(function(el) {return $(el).find('td').length < 3;}).attr({
"tabindex": "0"
}).find('.cell-record a').addClass(accjsClick).attr("tabindex", "0").attr("data-" + accjsWaitingFocus, ".chatlog-container");
$('.system-message:not(.' + accjsHas + '), .message-container:not(.' + accjsHas + ')')
.addClass(accjsHas)
.attr({
"tabindex": "0"
});
$('.ant-pagination li').addClass(accjsClick).attr({
"role": "link",
"tabindex": "0"
});
$('.audio-playbar-control i:not(.' + accjsHas + ')').addClass(accjsHas + ' ' + accjsClick).attr({
"tabindex": "0",
"role": "button",
"aria-label": "播放/暂停"
});
$('a span[data-spm-anchor-id]:not(.' + accjsHas + ')').each(function() {
if(this.innerText == '听录音') {
$(this).addClass(accjsHas + ' ' + accjsClick)
.attr({
"tabindex": "0",
"role": "button"
});
}
});
};
//ticket end
export {
ticket
};
