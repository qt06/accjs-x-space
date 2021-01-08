function getAudio() {
return document.querySelector('audio');
}
function setAudioVolume(op) {
var c = getAudio();
if(c instanceof HTMLAudioElement) {
if(op == '+') {
c.volume = Math.min(c.volume + 0.05, 1);
} else {
c.volume = Math.max(c.volume - 0.05, 0);
}
}
}
function setAudioCurrentTime(op) {
var c = getAudio();
if(c instanceof HTMLAudioElement) {
if(op == '+') {
c.currentTime += 5;
} else {
c.currentTime -= 5;
}
}
}
function toggleAudioPlay() {
var c = getAudio();
if(c instanceof HTMLAudioElement) {
if(c.paused) {
c.play();
} else {
c.pause();
}
}
}
function getVideo() {
return document.querySelector('video');
}
function setVideoVolume(op) {
var c = getVideo();
if(c instanceof HTMLVideoElement) {
if(op == '+') {
c.volume = Math.min(c.volume + 0.05, 1);
} else {
c.volume = Math.max(c.volume - 0.05, 0);
}
}
}
function setVideoCurrentTime(op) {
var c = getVideo();
if(c instanceof HTMLVideoElement) {
if(op == '+') {
c.currentTime += 5;
} else {
c.currentTime -= 5;
}
}
}
function toggleVideoPlay() {
var c = getVideo();
if(c instanceof HTMLVideoElement) {
if(c.paused) {
c.play();
} else {
c.pause();
}
}
}
export {
getAudio,
setAudioVolume,
setAudioCurrentTime,
toggleAudioPlay,
getVideo,
setVideoVolume,
setVideoCurrentTime,
toggleVideoPlay,
};
