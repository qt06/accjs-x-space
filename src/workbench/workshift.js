import {accjsClick, accjsHas, accjsWaitingFocus } from '../accjs-constants';
import $ from 'accjs-kit';
//workshift
const workshift = function() {
$('div.app-workshift-refresh')
.addClass(accjsClick)
.attr({
"role": "button",
"tabindex": "0"
});
$('div.app-workshift-data-table .table-body .col-label').attr({
"tabindex": "0"
});

let headerCols = $('div.app-workshift-data-table .table-header .header-col');
$('div.app-workshift-data-table .table-body .table-row').each(function() {
$(this)
.addClass(accjsHas)
.find('.table-col')
.each(function(i, col) {
if(i == 0) {
return true;
}
$(col).find('.cell').each(function(ci, cell) {
if(cell.innerText.trim() == '') {
cell.insertBefore(document.createTextNode(headerCols[i].innerText), cell.firstChild);
//$(this).append("<input type=\"checkbox\" name=\"ddd[]\" aria-label=\"" + headerCols[i].innerText + "\" />");
}
$(cell).find('input[type=checkbox]').attr({"aria-label": function() {return headerCols[i].innerText;}});
});
});
});
};
//workshift end
export {
workshift
};
