import {accjsClick, accjsHas, accjsWaitingFocus } from '../accjs-constants';
import $ from 'accjs-kit';
//notification
const notification = function() {
$('.xspace-notify-table tr td a').addClass(accjsClick).each(function() {
$(this).attr("data-" + accjsWaitingFocus, ".xspace-notify-item .content")
.attr({
"tabindex": "0",
"aria-label": $(this).parents('tr').text()
});
});
$('.ant-pagination li').addClass(accjsClick).attr({
"role": "link",
"tabindex": "0"
});
};
//notification end
export {
notification
};
