const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (event) => {
    userChoice = event.target.id;
    yourChoiceDisplay.innerHTML = userChoice;
  })
);
