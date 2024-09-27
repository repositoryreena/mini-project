const response = {
  stepCount: 4,
  stepInfo: [
    {
      stepNumber: 1,
      questions: ["step 1 - question 1", "step 1 - question 2"],
    },
    {
      stepNumber: 2,
      questions: ["step 2 - question 1", "step 2 - question 2"],
    },
    {
      stepNumber: 3,
      questions: ["step 3 - question 1", "step 3 - question 2"],
    },
    {
      stepNumber: 4,
      questions: ["step 4 - question 1", "step 4 - question 2"],
    },
  ],
};

function updateNavigationButtons() {
  document.getElementById("previous").disabled = stepNumber === 1;
  document.getElementById("next").disabled = stepNumber === response.stepCount;
  }

  
function step() {
  document.getElementById("question1").innerText = `${
    response.stepInfo[stepNumber - 1].questions[0]
  }`;
  document.getElementById("question2").innerText = `${
    response.stepInfo[stepNumber - 1].questions[1]
  }`;
}

let stepNumber = 1;
step();
updateNavigationButtons()

document.getElementById("previous").addEventListener("click", () => {
  stepNumber--;
  step();
  updateNavigationButtons()
});

document.getElementById("next").addEventListener("click", () => {
  stepNumber++;
  step();
  updateNavigationButtons()
});

