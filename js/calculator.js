var calculatorModule = (function(){
  var memory = 0;
  var balance = 150;


function setBalance(num){
  balance = num;
  console.log(balance);
}

function returnBalance(){
  return balance;
}

function deposit(num){
  balance += num;
  console.log(balance);
}

function withdraw(num){
  balance -= num;
}

function add(num1,num2){
  return num1 + num2;
}

function subtract(num1,num2){
  return num1 - num2;
}

function multiply(num1,num2){
  return num1 * num2;
}

function divide(num1,num2){
  return num1 / num2;
}

return {
  setBalance : setBalance,
  returnBalance : returnBalance,
  deposit : deposit,
  withdraw : withdraw,
  add : add,
  subtract : subtract,
  multiply : multiply,
  divide : divide,
};
});

var calculator = calculatorModule();