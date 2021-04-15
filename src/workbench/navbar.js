import { navLabels as navs} from '../constants';
import {accjsClick, accjsHas, accjsWaitingFocus } from '../accjs-constants';
import {getAlt} from '../functions';
import $ from 'accjs-kit';
//navbar
const navbar = function() {
$('a[href*="system"]:not(.' + accjsHas + ')')
.addClass(accjsHas)
.attr({
"title": function() {return getAlt(navs, $(this).attr('href')); }
});
$('.xspace-logo:not(.' + accjsHas + '), a.more-btn:not(.' + accjsHas + '), a.xspace-network-status:not(.' + accjsHas + '), a.xspace-feedback-btn:not(.' + accjsHas + '), .user-profile .profile-avatar:not(.' + accjsHas + ')')
.addClass(accjsClick + ' ' + accjsHas)
.attr({
"tabindex": "0",
"role": "link",
"title": function() {return getAlt(navs, $(this).attr('class')); }
});
$('[data-xt]')
.addClass(accjsHas)
.each(function() {
let _this = $(this);
_this.find('svg').each(function() {
$(this).parent().addClass(accjsClick).attr({
"tabindex": "0",
"role": "link",
"data-label": function() {return getAlt(navs, _this.attr('data-xt')); },
"title": function() {return getAlt(navs, _this.attr('data-xt')); }
});
});
});
$('[title=培训]').attr('data-' + accjsWaitingFocus, '.im-bot-widget-index-popover span:first-of-type');
$('[data-label="我的状态"]').attr({
"title": function() {
let label = "我的状态";
$(this).find('.widgets-icon-status').each(function() {
if(this.matches('.status-0')) {
label += "(离线)";
} else if(this.matches('.status-1')) {
label += "(在线)";
} else if(this.matches('.status-3')) {
label += "(忙碌)";
} else if(this.matches('.status-99')) {
label += "(培训)";
}
});
return label;
}
});
};
//end navbar

export {
navbar
};
