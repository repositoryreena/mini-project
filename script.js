const response = {
    stepCount: 4,
    stepInfo: [
      {
        stepNumber: 1,
        questions: ['step 1 - question 1', 'step 1 - question 2']
      },
      {
        stepNumber: 2,
        questions: ['step 2 - question 1', 'step 2 - question 2']
      },
      {
        stepNumber: 3,
        questions: ['step 3 - question 1', 'step 3 - question 2']
      },
      {
        stepNumber: 4,
        questions: ['step 4 - question 1', 'step 4 - question 2']
      },
    ]
  };

  console.log(response.stepCount)

  let stepNumber=1
  if (stepNumber === 1) {
    document.getElementById("previous").disabled=true
  }
  else if (stepNumber === response.stepCount) {
    document.getElementById("next").disabled=true
  }else{
    document.getElementById("next").disabled=false
    document.getElementById("previous").disabled=false
  }

  document.getElementById("question1").innerText = `${response.stepInfo[stepNumber-1].questions[0]}`
  document.getElementById("question2").innerText = `${response.stepInfo[stepNumber-1].questions[1]}`



  document.getElementById("previous").addEventListener("click", ()=>{
stepNumber--
document.getElementById("question1").innerText = `${response.stepInfo[stepNumber-1].questions[0]}`
  document.getElementById("question2").innerText = `${response.stepInfo[stepNumber-1].questions[1]}`

  if (stepNumber === 1) {
    document.getElementById("previous").disabled=true
  }

  else if (stepNumber === response.stepCount) {
    document.getElementById("next").disabled=true
  }else{
    document.getElementById("next").disabled=false
    document.getElementById("previous").disabled=false
  }
  })



  document.getElementById("next").addEventListener("click", ()=>{
    document.getElementById("previous").disabled=false;
        stepNumber++
          document.getElementById("question1").innerText = `${response.stepInfo[stepNumber-1].questions[0]}`
  document.getElementById("question2").innerText = `${response.stepInfo[stepNumber-1].questions[1]}`

  if (stepNumber === 1) {
    document.getElementById("previous").disabled=true
  }

  else if (stepNumber === response.stepCount) {
    document.getElementById("next").disabled=true
  }else{
    document.getElementById("next").disabled=false
    document.getElementById("previous").disabled=false
  }
  })