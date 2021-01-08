import $ from 'accjs-kit';
import {weekNames} from '../constants';
import {accjsAutoChecked, accjsCheckbox} from '../accjs-constants';
let defaultConfig = {};
Object.keys(weekNames).forEach(function(name) {
	defaultConfig[name] = '';
});

const workshift = function() {
$('input:not(.accjs-has), select:not(.accjs-has), button:not(.accjs-has)').addClass('accjs-has mousetrap');
chrome.storage.sync.get(defaultConfig, function(items) {
$('div.app-workshift-data-table .table-body .table-row').each(function() {
let ql = [];
let weekText = $(this).find('.week-name').text().trim();
for(let key in weekNames) {
if(weekText == weekNames[key]) {
ql = items[key].split(' ');
break;
}
}
//alert(ql);
$(this).find('.table-col').each(function(i) {
if(i == 0) {
return true;
}
if($(this).find('svg').length > 0) {
return true;
}
$(this).find('input[type=checkbox]').attr('data-' + accjsCheckbox, 'true');
var h = '' + (i - 1);
if(ql.includes(h)) {
$(this).find('input[type=checkbox]').attr('data-' + accjsAutoChecked, 'true');
}
});
});
});
};
export {
workshift
};
