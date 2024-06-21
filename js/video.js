document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("autoplay-video");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const stopBtn = document.getElementById("stop-btn");
  
    playBtn.addEventListener("click", function() {
      video.play();
    });
  
    pauseBtn.addEventListener("click", function() {
      video.pause();
    });
  
    stopBtn.addEventListener("click", function() {
      video.pause();
      video.currentTime = 0;
    });
  
    // Listen for the ended event on the video element
    video.addEventListener("ended", function() {
      video.pause(); // Pause the video when it ends
    });
  });
  