// Get the modal
const StartDialog = document.getElementById("StartDialog");
const MediaPlayer = document.getElementById("MediaPlayer");
const InputDialog = document.getElementById("InputDialog");

// Get the button that opens the modal
const Start = document.getElementById("Start");
const Launch = document.getElementById("LaunchMediaPlayer");

// Get the <span> element that closes the modal
//const closeButtons = document.getElementsByClassName("close");
const StartModalOK = document.getElementsByClassName("start-modal-proceed")[0];

// Get the video and the play button
const playbtn = document.getElementsByClassName("playbtn")[0];
const video = document.getElementsByClassName("video")[0];
const mute = document.getElementsByClassName("mute")[0];
let muteicon = document.getElementsByClassName("muteicon")[0];
let isPlaying = false;

// Hide elements on start
function onLoadFunctions() {
  StartDialog.style.display = "none"; 
  MediaPlayer.style.display = "none"; 
  InputDialog.style.display = "none";
}
window.onload = onLoadFunctions;

// When the user clicks on the button, open the modal
Start.onclick = function() {
  StartDialog.style.display = "block";
}
Launch.onclick = function() {
  StartDialog.style.display = "none"; // Ensure StartDialog is hidden when Launch is clicked
  MediaPlayer.style.display = "grid"; // Show MediaPlayer
  video.load(); // Ensure the video is loaded and ready
}

// When the user clicks on the play button, start the video
playbtn.onclick = function() {
  video.play();
}
mute.onclick = function() {
  if (video.muted) {
    video.muted = false;
    muteicon.src = "img/sound.png";
  } else {
    video.muted = true;
    muteicon.src = "img/mute.png";
  }
  isPlaying = !isPlaying;
}

// When the user clicks on OK, close the modal
StartModalOK.onclick = function() {
  StartDialog.style.display = "none";
}

const closeButtons = document.getElementsByClassName("close");
let errorsound = new Audio('./sound/error.mp3');
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function () {
    // Play the error sound
    errorsound.load();
    errorsound.play();
  }
}

video.onended = function() {
  InputDialog.style.display = "grid";
}

// Question List
const scarface_question = document.getElementById("scarface_question");
const scarface_solution = document.getElementById("scarface_solution");
const theshining_question = document.getElementById("theshining_question");
const theshining_solution = document.getElementById("theshining_solution");

let answer = document.getElementById("answer");
//if (video === (scarface_question)) {
  answer.oninput = function() {
    if (answer.value.replace(/[^\w\s]|_/g, "").toLowerCase() == "say hello to my little friend") {
    InputDialog.style.display = "none";
    answer.value = "";
    scarface_question.style.display = "none";
    scarface_solution.style.display = "block";
    scarface_solution.play();
  }
}

//let answer = document.getElementById("answer");
//if answer.oninput = function() {
//    if (answer.value.replace(/[^\w\s]|_/g, "").toLowerCase() === "say hello to my little friend") {
//      InputDialog.style.display = "none";
//      answer.value = "";
//      scarface_question.style.display = "none";
//      scarface_solution.style.display = "block";
//      scarface_solution.play();
//    }
//  };

// StartModalClose.onclick = function playSound() {
//  var error = new Audio('error.m4a');
//  error.playSound();
//}

// let af en toe veranderen
// const nooit veranderen
// var vaak veranderen
