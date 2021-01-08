import $ from 'accjs-kit';
import {accjsMutationObserver} from './functions';
import {setVideoVolume, setVideoCurrentTime, toggleVideoPlay} from './media-control';
import {accjsClick} from './accjs-constants';

window.onerror = function(msg, url, line) {
	alert("error: "+msg+"\r\n line: "+line+"\r\n url: "+url);
	return false;
};

accjsMutationObserver(() => {
$('.prism-play-btn, .prism-fullscreen-btn, ul li')
.addClass(accjsClick)
.attr({
"tabindex": "0",
"role": "link"
});
$('main div').each(function() {
let cns = this.childNodes;
if(cns.length == 1 && cns[0].nodeType == 3 && this.innerText == '开始认证考试') {
$(this).addClass(accjsClick)
  .attr({
  "tabindex": "0",
  "role": "link"
  });
}
});
$('.prism-play-btn').attr('aria-label', '播放');
$('.playing').attr('aria-label', '暂停');
$('.prism-fullscreen-btn').attr('aria-label', '进入全屏');
$('.fullscreen').attr('aria-label', '取消全屏');
});

Mousetrap.bind('shift+up', function() {
setVideoVolume('+');
return false;
});
Mousetrap.bind('shift+down', function() {
setVideoVolume('-');
return false;
});
Mousetrap.bind('shift+right', function() {
setVideoCurrentTime('+');
return false;
});
Mousetrap.bind('shift+left', function() {
setVideoCurrentTime('-');
return false;
});
Mousetrap.bind('space', function(e) {
//if(!e.target.matches('.prism-play-btn, .prism-fullscreen-btn')) {
toggleVideoPlay();
return false;
//}
});
Mousetrap.bind('enter', function(e) {
if(e.target.matches('.' + accjsClick)) {
e.target.click();
return false;
}
});
