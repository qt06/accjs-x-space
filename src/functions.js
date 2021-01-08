import $ from 'accjs-kit';
function accjsMutationObserver(proc) {
//let num = 0;
    let mo = new MutationObserver((records) => {
//num++;
//document.title = num;
proc();
//end records
}); //mo
    mo.observe(document.body, {
      'childList': true,
      'subtree': true
    });
}

function registerHotkey(accesskey, selector, attrs = {}, index = -1) {
Mousetrap.bind(accesskey, function() {
let obj = $(selector);
if(attrs.length > 0) {
obj.attr(attrs);
}
obj.each(function() {
if($.isVisible(this)) {
this.focus();
return false;
}
});
});
}

function waitingFocus(selector) {
setTimeout(function() {
$(selector).attr('tabindex', '0').focus();
}, 800);
}

function getAlt(faceData, src) {
let alt = '';
if(typeof src != 'string' || src == '') {
return alt;
}
for(let key in faceData) {
if(src.includes(faceData[key])) {
alt = key;
break;
}
}
return alt;
}

function snd(fileName) {
var audio = new Audio(chrome.extension.getURL('snd/' + fileName));
audio.play();
}

function randomString() {
var arr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var nn = [];
for(var i = 0; i < 6; i++) {
nn.push(arr[Math.floor((Math.random()*arr.length))]);
}
return nn.join('');
//return '_' + Math.random().toString(36).substr(2);
}
export {
accjsMutationObserver,
registerHotkey,
waitingFocus,
getAlt,
snd,
randomString
};