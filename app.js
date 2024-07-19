let billElement = document.getElementById("bill-amount");
let totalPeopleElement = document.getElementById("total-people-input");
let tipPerPersonElement = document.getElementById("tip-per-person");
let totalAmountEachElement = document.getElementById("total-per-person");
let fivePercentButton = document.getElementById("five-percent");
let tenPercentButton = document.getElementById("ten-percent");
let fiftenPercentButton = document.getElementById("fiften-percent");
let twentyFivePercentButton = document.getElementById("twenty-five");
let customAmountElement = document.getElementById("custom-input");
let resetButton = document.getElementById("reset");
// definitions

//first function 5%
fivePercentButton.addEventListener("click", addFivePercentTip);
function addFivePercentTip() {
  let billAmount = parseFloat(billElement.value);
  let people = parseFloat(totalPeopleElement.value);
  let tip = billAmount * 0.05;
  let totalTipBill = billAmount + tip;
  let tipPerPerson = totalTipBill / people;
  tipPerPersonElement.innerText = tip / people;
  totalAmountEachElement.innerText = totalTipBill / people;
}

//second function 10%
tenPercentButton.addEventListener("click", addTenPercentTip);
function addTenPercentTip() {
  let billAmount = parseFloat(billElement.value);
  let people = parseFloat(totalPeopleElement.value);
  let tip = billAmount * 0.1;
  let totalTipBill = billAmount + tip;
  let tipPerPerson = totalTipBill / people;
  tipPerPersonElement.innerText = tip / people;
  totalAmountEachElement.innerText = totalTipBill / people;
}

//reset function
resetButton.addEventListener("click", resetAll);
function resetAll() {
  billElement.value = "";
  totalPeopleElement.value = "";
  tipPerPersonElement.textContent = "$0.00";
  totalAmountEachElement.textContent = "$0.00";
}
