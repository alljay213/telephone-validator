const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const numRegex = /^1?([\s\-])?(\(\d{3}\)|\d{3})([\s\-])?\d{3}([\s\-])?\d{4}$/;

function checkNum() {
  const userInputValue = userInput.value.trim(); // Trim leading and trailing spaces

  if (userInputValue === "") {
    alert("Please provide a phone number");
  } else {
    const isValid = numRegex.test(userInputValue);

    if (isValid) {
      results.innerText = `Valid US number: ${userInputValue}`;
    } else {
      results.innerText = `Invalid US number: ${userInputValue}`;
    }
  }
}

function clearScreen() {
  results.innerText = "";
  userInput.value = "";
}

checkBtn.addEventListener("click", checkNum);
clearBtn.addEventListener("click", clearScreen);
