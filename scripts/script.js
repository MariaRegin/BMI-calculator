const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");
const submitButton = document.getElementById("button");

let weight = toString(inputWeight.value);
let height = toString(inputHeight.value);

function calculateBMI() {
  const heightForBmiCalculation = Math.pow(height, 2);
  const weightForBmiCalculation = weight / heightForBmiCalculation;
  const result = Math.round(weightForBmiCalculation * 100);
  inputWeight.value = "";
  inputHeight.value = "";
  alert(result);
}

submitButton.addEventListener("click", calculateBMI);
