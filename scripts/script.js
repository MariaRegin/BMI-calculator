const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");
const submitButton = document.getElementById("button");

function calculateBMI() {
  let weight = Number(inputWeight.value);
  let heightBeforeConvertion = Number(inputHeight.value);
  let height = heightBeforeConvertion / 100;
  const heightForBmiCalculation = Math.pow(height, 2);
  const weightForBmiCalculation = weight / heightForBmiCalculation;
  const result = Math.round(weightForBmiCalculation.toFixed(2));
  inputWeight.value = "";
  inputHeight.value = "";
  alert(result);
}

submitButton.addEventListener("click", calculateBMI);
