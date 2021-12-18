import {accjsClick, accjsHas, accjsWaitingFocus } from '../accjs-constants';
import $ from 'accjs-kit';
const misc = function() {
//training
$('.im-bot-widget-index-popover span, .trainning-popover-menu span')
.addClass(accjsClick)
.attr({
"tabindex": "0",
"role": "link"
});
//training

//misc
//don't switch the position of the below two lines
$('[role=dialog], [role=grid], [role=tablist], [role=tabpanel], [role=presentation]').removeAttr('tabindex');
//[role=combobox], 
$('[role=dialog], [role=grid], [role=tablist], [role=tabpanel], [role=presentation],[role=menu], [role=menuitem], [role=search]').removeAttr('role');
$('[role=tab]:not(.' + accjsHas + ')')
.addClass(accjsClick + ' ' + accjsHas)
.attr({
"role": "button",
"tabindex": "0"
});
$('.ant-menu-item')
.not(function(el) {return $(el).find('a').length > 0;})
.addClass(accjsClick)
.attr({
"role": "button",
"tabindex": "-1"
});
$('.mr-fab__menu__icon')
.addClass(accjsClick)
.attr({
"role": "button",
"aria-label": function() {return $(this).parent().text();},
"tabindex": "0"
});
//$('li[role=menuitem]').removeAttr('role');
//$('.react-contextmenu-item').removeAttr('role');
//$('.anticon, .ant-tabs-tab-prev-icon, .ant-tabs-tab-next-icon, .assistant-solution-iconfont')
$('i[aria-label*="图标"]:not(.' + accjsHas + ')')
.attr({
"aria-hidden": "true"
});
$('.ant-modal-wrap div[tabindex]').removeAttr('tabindex');
$('input.ant-calendar-range-picker-input').removeAttr('tabindex');
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
//misc
};
export {
misc
};
