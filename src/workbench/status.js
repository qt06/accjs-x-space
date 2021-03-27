import {accjsClick, accjsHas, accjsWaitingFocus } from '../accjs-constants';
import $ from 'accjs-kit';
//status
const status = function() {
$('.ant-popover-inner').removeAttr('role');
$('.im-status-list-container .im-status-list li, .im-widgets-status-container li').addClass(accjsClick).each(function() {
let checked = $(this).find('.anticon-check').length > 0 ? '已选择' : '';
let label = $(this).text() + ' ' + checked;
$(this).attr({
"tabindex": "0",
"role": "link",
"aria-label": label
});
});
$('.ant-switch:not(.ant-switch-checked)').attr({
"aria-label": "已关闭"
});
$('.ant-switch-checked').attr({
"aria-label": "已开启"
});
$('.telephone-workstatus-list div').addClass(accjsClick).attr({
"tabindex": "0",
"role": "link"
});
};
//status end
export {
status
};
