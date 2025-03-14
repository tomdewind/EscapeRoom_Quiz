// Get the modal
const modal = document.getElementById("myModal");
const MediaPlayer = document.getElementById("MediaPlayer");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const pepernoot = document.getElementsByClassName("close")[0];
const span = document.getElementsByClassName("ok-btn")[0];




// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  MediaPlayer.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
pepernoot.onclick = function() {
    modal.style.display = "none";
}

// let af en toe veranderen
// const nooit veranderen
// var vaak veranderen

