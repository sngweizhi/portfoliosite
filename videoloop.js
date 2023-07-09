var parentDivs = document.querySelectorAll('.notion-video'); // Selects all elements with the class 'notion-video'
parentDivs.forEach(parentDiv => {
  var video = parentDiv.querySelector('video'); // Selects the 'video' tag inside the current 'notion-video' element
  if (video) { // Check if the video element exists
    video.loop = true; // Sets the video to loop once it ends
    video.autoplay = true; // Sets the video to autoplay once it's loaded
    video.setAttribute("muted", ""); // Mutes the video
    video.setAttribute('playsinline', ''); // Allows the video to play inline on iOS devices
    video.setAttribute('webkit-playsinline', ''); // Allows the video to play inline on iOS devices with the 'webkit' prefix
    video.removeAttribute("controls"); // Removes the video controls
    video.load(); // Loads the video
  }
});
