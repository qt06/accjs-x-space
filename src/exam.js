import $ from 'accjs-kit';
var DEBUG = false;
window.onerror = function(msg, url, line) {
	alert("error: "+msg+"\r\n line: "+line+"\r\n url: "+url);
	return false;
};

var cnum = 0;
var anum = 0;
var firstClassName = '';
    var mo = new MutationObserver((records) => {
cnum++;
DEBUG && (document.title = 'c' + cnum + ', a' + anum);
$('button').each(function() {
let text = this.innerText;
if(text.includes('上一题') || text.includes('上一错题')) {
$(this).attr('accesskey', 'z');
} else if(text.includes('下一题') || text.includes('下一错题')) {
$(this).attr('accesskey', 'x');
} else if(text.includes('交卷')) {
$(this).attr('accesskey', 'c').addClass('jje');
}
});

$('main').find('span').parent().attr('tabindex','0').attr('role', 'text').first().focus();
var divs = $('main div');
for(var i = 0, len = divs.length; i < len; i++) {

if(divs[i].innerText == 'A') {
var s = divs[i].parentNode.classList[0];
var roleText = $('main h6')[0].innerText;
var role = (roleText == '单选题' || roleText == '判断题') ? 'radio' : (roleText == '不定项选择题' ? 'checkbox' : 'text');
var isResult = $('main').text().includes('得分') ? true : false;
$('main .'+s + ':not([accjs-class])').each(function() {
if(firstClassName == '') {
firstClassName = this.className;
}
var className = this.className;
var text = this.innerText;
$(this).attr({
"role": role,
"aria-checked": function() {return firstClassName == className ? 'false' : 'true';},
"aria-label": function() {return firstClassName == className || isResult ? text : '已选中' + text;},
"tabindex": "0",
"data-accjs": "click",
"accjs-class": firstClassName
});
});
break;
}
}

//end records
}); //mo
    mo.observe(document.body, {
      'childList': true,
      'subtree': true
    });
    var moa = new MutationObserver((records) => {
anum++;
DEBUG && (document.title = 'c' + cnum + ', a' + anum);
records.forEach(function(record) {
if(record.type == 'attributes' && record.target.nodeType == 1) {

if(record.target.hasAttribute('accjs-class') && record.target.getAttribute('accjs-class') != record.target.className) {
record.target.setAttribute('aria-checked', 'true');
record.target.setAttribute('aria-label', '已选中 ' + record.target.innerText);
} else if(record.target.getAttribute('accjs-class') == record.target.className) {
record.target.setAttribute('aria-checked', 'false');
record.target.setAttribute('aria-label', record.target.innerText);
}
}
});
//end records
}); //moa
    moa.observe(document.body, {
      'attributes': true,
'attributeOldValue': true,
      'subtree': true,
'attributeFilter': ['class']
    });


  $(document).on('click', '.jje', function() {
  setTimeout(function() {
$('main div').each(function() {
let cns = this.childNodes;
if(cns.length == 1 && cns[0].nodeType == 3) {
let text = this.innerText;
if(text.includes('是否交卷')) {
$(this).parent().parent().attr('tabindex', '-1').focus();
}
if(text == '返回') {
$(this).attr({
"role": "button",
"tabindex": "0",
"data-accjs": "click"
}).text('返回继续答题');
}
if(text == '交卷') {
$(this).attr({
"role": "button",
"tabindex": "0",
"data-accjs": "click"
}).text('确认交卷');
}
}
});
  }, 500);
  });

$(document).on('keydown', 
'[data-accjs=click]', 
function(e) {
if(e.which === 13 || e.which === 32) {
this.click();
}
});