$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});

function hideshow() {
  var x = document.getElementById("booktbl");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideshowmenu() {
  var x = document.getElementById("breakfast");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideshowlunchmenu() {
  var x = document.getElementById("lunch");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideshowdinnermenu() {
  var x = document.getElementById("dinner");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


// Modifications
