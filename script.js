var heartCount = 0;
var coinCount = 100;
var callHistory = [];

window.onload = function () {
  var heartButtons = document.querySelectorAll(".heart-btn");
  for (var i = 0; i < heartButtons.length; i++) {
    heartButtons[i].onclick = function () {
      heartClick(this);
    };
  }
};

function heartClick(heartIcon) {
  if (heartIcon.classList.contains("fa-regular")) {
    heartCount = heartCount + 1;
    heartIcon.classList.remove("fa-regular");
    heartIcon.classList.add("fa-solid", "liked");
  } else {
    heartCount = heartCount - 1;
    heartIcon.classList.remove("fa-solid", "liked");
    heartIcon.classList.add("fa-regular");
  }

  document.getElementById("heart-count").innerHTML = heartCount;
}

function copyNumber(phoneNumber) {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(function () {
        alert("Number copied: " + phoneNumber);
      })
      .catch(function () {
        alert("Could not copy. Number is: " + phoneNumber);
      });
  } else {
    alert("Number to copy: " + phoneNumber);
  }
}
