import $ from 'accjs-kit';
import {accjsClick} from '../accjs-constants';
const workshift = function() {
$('.am-picker-popup .am-picker-popup-item, .am-picker-popup .am-picker-col-item').addClass(accjsClick).attr({
"role": "link",
"tabindex": "0"
});
$('.am-picker-popup .am-picker-col-item-selected').attr({
"aria-label": function() {return this.innerText + '（已选则）';}
});

};
export {
workshift
};
