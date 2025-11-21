var video;


window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.querySelector("#player1");
  video.autoplay = false;
  video.loop = false;
  console.log("Autoplay is set to " + video.autoplay);
  console.log("Loop is set to " + video.loop);

  updateVolumeDisplay();
});


function updateVolumeDisplay() {
  const volSpan = document.querySelector("#volume");
  volSpan.textContent = (video.volume * 100).toFixed(0) + "%";
}

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  updateVolumeDisplay();
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate = video.playbackRate * 0.9;
  console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate = video.playbackRate / 0.9;
  console.log("New speed is " + video.playbackRate);
});


document.querySelector("#skip").addEventListener("click", function () {
  let newTime = video.currentTime + 10;
  if (newTime >= video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime = newTime;
  }
  console.log("Current location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
  video.muted = !video.muted;
  this.textContent = video.muted ? "Unmute" : "Mute";
});


document.querySelector("#slider").addEventListener("input", function () {
  video.volume = this.value /100;
  updateVolumeDisplay();
});




document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});


document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});


