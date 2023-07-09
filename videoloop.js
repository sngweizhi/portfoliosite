var parentDivs = document.querySelectorAll('.notion-video'); 
parentDivs.forEach(parentDiv => {
  var video = parentDiv.querySelector('video'); 
  if (video) { 
    video.loop = true;
    video.autoplay = true; 
    video.setAttribute("muted", ""); 
    video.setAttribute('playsinline', ''); 
    video.setAttribute('webkit-playsinline', '');
    video.removeAttribute("controls"); 
    video.load(); 
  }
});
