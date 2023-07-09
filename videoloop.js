var parentDiv = document.querySelector('.notion-video');
var video = parentDiv.querySelector('video');
video.loop = true;
video.autoplay = true;
video.setAttribute("muted", "");
video.setAttribute('playsinline', '');
video.setAttribute('webkit-playsinline', '');
video.removeAttribute("controls");
video.load();