var calculatorModule = (function(){
  var memory = 0;
  var balance = 0;


function setBalance(num){
  balance = num;
  console.log(balance);
}

function returnBalance(){
  return balance;
}

function add(num){
  return memory += num;
}

function subtract(num){
  return memory -= num;
}

function multiply(num){
  return memory *= num;
}

function divide(num){
  return memory /= num;
}

return {
  setTotal : setTotal,
  returnTotal : returnTotal,
  add : add,
  subtract : subtract,
  multiply : multiply,
  divide : divide,
};













































});