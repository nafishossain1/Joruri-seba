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

function makeCall(serviceName, phoneNumber) {
  if (coinCount < 20) {
    alert(
      "Not enough coins! You need 20 coins to make a call. You have " +
        coinCount +
        " coins."
    );
    return;
  }

  coinCount = coinCount - 20;
  document.getElementById("coin-count").innerHTML = coinCount;

  alert(
    "Calling " +
      serviceName +
      "\nNumber: " +
      phoneNumber +
      "\n20 coins used. Remaining: " +
      coinCount +
      " coins"
  );

  addToHistory(serviceName, phoneNumber);
}

function addToHistory(serviceName, phoneNumber) {
  var now = new Date();
  var timeString = now.toLocaleTimeString();

  var historyItem = {
    name: serviceName,
    number: phoneNumber,
    time: timeString,
  };

  callHistory.unshift(historyItem);
  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  var historyList = document.getElementById("history-list");
  historyList.innerHTML = "";

  if (callHistory.length === 0) {
    historyList.innerHTML =
      '<div class="no-history"><p>No call history available</p><span>Make a call to see history here</span></div>';
    return;
  }

  for (var i = 0; i < callHistory.length; i++) {
    var item = callHistory[i];

    var historyHTML =
      '<div class="history-item">' +
      "<h4>" +
      item.name +
      "</h4>" +
      '<div class="number">' +
      item.number +
      "</div>" +
      '<div class="time">' +
      item.time +
      "</div>" +
      "</div>";

    historyList.innerHTML = historyList.innerHTML + historyHTML;
  }
}

function clearHistory() {
  var confirmClear = confirm(
    "Are you sure you want to clear all call history?"
  );
  if (confirmClear) {
    callHistory = [];
    updateHistoryDisplay();
    alert("Call history cleared!");
  }
}
