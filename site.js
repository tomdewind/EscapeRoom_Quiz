// Get the modal
const modal = document.getElementById("myModal");
const MediaPlayer = document.getElementById("MediaPlayer");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const modal1close = document.getElementsByClassName("close")[0];
const modal1ok = document.getElementsByClassName("ok-btn")[0];

// Get the video and the play button
const play = document.getElementsByClassName("play")[0];
const video = document.getElementsByClassName("video")[0];




// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the play button, start the video
play.onclick = function() {
  video.play();
}

// When the user clicks on <span> (x), close the modal
modal1ok.onclick = function() {
  modal.style.display = "none";
  MediaPlayer.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modal1close.onclick = function() {
    modal.style.display = "none";
}

// let af en toe veranderen
// const nooit veranderen
// var vaak veranderen

