// Get the modal
const StartDialog = document.getElementById("StartDialog");
const MediaPlayer = document.getElementById("MediaPlayer");

// Get the button that opens the modal
const Start = document.getElementById("Start");
const Launch = document.getElementById("LaunchMediaPlayer");

// Get the <span> element that closes the modal
const StartModalClose = document.getElementsByClassName("close")[0];
const StartModalOK = document.getElementsByClassName("start-modal-proceed")[0];

// Get the video and the play button
const play = document.getElementsByClassName("play")[0];
const video = document.getElementsByClassName("video")[0];


// Hide elements on start
function onLoadFunctions() {
}
window.onload = onLoadFunctions;
  StartDialog.style.display = "none";
  MediaPlayer.style.display = "none";

// When the user clicks on the button, open the modal
Start.onclick = function() {
  StartDialog.style.display = "block";
}
Launch.onclick = function() {
  MediaPlayer.style.display = "block";
}

// When the user clicks on the play button, start the video
play.onclick = function() {
  video.play();
}

// When the user clicks on OK, close the modal
StartModalOK.onclick = function() {
  StartDialog.style.display = "none";
}

// When the user clicks on (x), close the modal
StartModalClose.onclick = function() {
  StartDialog.style.display = "none";
}

// let af en toe veranderen
// const nooit veranderen
// var vaak veranderen

