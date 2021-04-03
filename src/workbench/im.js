import {accjsClick, accjsHas, accjsWaitingFocus } from '../accjs-constants';
import $ from 'accjs-kit';
const im = function() {
//chat-message
$('[class*=mc-groupName--]:not(.' + accjsHas + '), [class*=mc-infoDetail--]:not(.' + accjsHas + '), .chatting-list .sub-title:not(.' + accjsHas + '), .history-list .sub-title:not(.' + accjsHas + ')')
.addClass(accjsHas)
.attr({
"role": "link",
"tabindex": "0"
});
$('.chat-contact-item:not(.' + accjsHas + ')')
.addClass(accjsClick + ' ' + accjsHas)
.attr({
"tabindex": "0",
"role": "link"
});

$('.chat-message:not(.' + accjsHas + '), .chat-system-message:not(.' + accjsHas + ')')
.addClass(accjsHas)
.attr({
"tabindex": "0"
}).find('img').attr({
"tabindex": "0",
"alt": function() {
let alt = '';
if(this.hasAttribute('alt')) {
alt = this.getAttribute('alt');
}
if(alt.trim() == '') {
alt = '图片';
}
return alt;
}
});
$('a.go-example-btn')
.addClass(accjsClick)
.attr('tabindex', '0');
//chat-message end

//9 cells
$('[data-c-l-i*="scene-item"]:not(.' + accjsHas + ')')
.addClass(accjsClick + ' accesskey-first ' + accjsHas)
.attr({
"tabindex": "0",
"role": "group"
});
$('[data-c-l-i*="scene-subitem"]:not(.' + accjsHas + ')')
.addClass(accjsClick + ' accesskey-second ' + accjsHas)
.attr({
"tabindex": "0",
"role": "group"
});

//9 cells end

//editor
$('[data-tooltip]:not(.' + accjsHas + ')')
.addClass(accjsClick + ' ' + accjsHas)
.attr({
"role": "button",
"tabindex": "-1",
"title": function() { return $(this).attr('data-tooltip'); }
});
$('.chat-input .editable:not(.' + accjsHas + ')')
.addClass(accjsHas + ' mousetrap')
.attr({
"role": "textbox",
"tabindex": "0",
"aria-label": "输入"
});
//editor end

//toolbar
$('.tool-bar button[data-title]').attr({
"aria-label": function() { return $(this).attr('data-title'); }
});

//end toolbar

//transfer
$('.tool-bar .icon-export:not(.' + accjsHas + ')').addClass(accjsClick + ' ' + accjsHas).attr({
"aria-label": "转交会话",
"role": "button",
"tabindex": "-1"
});
$('[data-tooltip=转交]')
.attr('data-' + accjsWaitingFocus, '.im-transfer-popover');
$('.chat-transfer-form .ant-input').attr({
"tabindex": "0"
});
//end transfer

//close conversation
$('.tool-bar .icon-poweroff:not(.' + accjsHas + ')').addClass(accjsClick + ' ' + accjsHas).attr({
"aria-label": "关闭会话",
"role": "button",
"tabindex": "-1"
}).attr('data-' + accjsWaitingFocus, '.ant-popover-buttons .ant-btn-primary');
$('[data-tooltip=结束]')
.attr('data-' + accjsWaitingFocus, '.close-confirm .ant-btn-primary');
//end close conversation

//solp
$('div, span, input, button').removeAttr('aria-hidden');
$('.ant-cascader-menu-item:not(.' + accjsHas + '), .ah-solution-components-home-faults--trigger:not(.' + accjsHas + '), .ah-solution-components-question--title:not(.' + accjsHas + '), .question-item-title:not(.' + accjsHas + '), .ali-x-field-name:not(.' + accjsHas + ')')
.addClass(accjsClick + ' ' + accjsHas)
.attr({
"tabindex": "0",
"role": "link"
});
$('[data-role="xsop-node-titleContainer"], .ali-x-section-title, .recommend-list, .tradeDetailView')
.attr('tabindex', '-1');
$('input[type=text], input[type=search], input.ant-input').addClass('mousetrap');
$('[contenteditable="true"]:not(.' + accjsHas + ')')
.addClass(accjsHas + ' mousetrap')
.attr({
"tabindex": "0",
"role": "textbox"
});
//solp end
};
export {
im
};


