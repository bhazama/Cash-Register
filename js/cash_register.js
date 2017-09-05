
// OPERATORS FOR MATH COMPUTATIONS
var currentValue = 0; // FIRST VALUE OF MATH OP
var secondValue = 0; // SECOND VALUE OF MATH OP
var operator = null;    //(+,-,/,*)

//VARIABLES FOR DISPLAY
var displayArr = [];
var displayScreen;
var displayNum;
//console.log("sanity check");
var numArr = [];
var result = 0;


///MAKING VARIABLES FOR BUTTONS IN HTML///
var displayButton = document.getElementById("display");

var clearButton = document.getElementById("clear");

var numButtons = document.getElementsByClassName("numberButtons");


///ADDING EVENT LISTNER TO ALL NUMBER BUTTONS///
for(var i = 0; i < numButtons.length; i++){
  numButtons[i].addEventListener("click", function(event){
    if(operator === null){
    displayArr.push(event.currentTarget.value);
    displayScreen = displayArr.join("");
    displayButton.innerHTML = displayScreen;
    displayNum = parseFloat(displayScreen);
    currentValue = displayNum;
    console.log("FIRST", currentValue);
   }else{
    displayArr.push(event.currentTarget.value);
    displayScreen = displayArr.join("");
    displayButton.innerHTML = displayScreen;
    displayNum = parseFloat(displayScreen);
    secondValue = displayNum;
    console.log("SECOND", secondValue);
   }
  });
}

///ADDING EVENT LISTENER TO "CLEAR" BUTTON///
clearButton.addEventListener("click",function(event){
  displayArr = [];
  numArr = [];
  displayScreen = "";
  displayNum = 0;
  displayButton.innerHTML = displayNum;
  currentValue = 0;
  secondValue = 0;
  operator = null;

});


///ADDING EVENT LISTENER TO ALL MATH BUTTONS///
var mathButtons = document.getElementsByClassName("mathButtons");
for(var i = 0; i < mathButtons.length; i++){
  mathButtons[i].addEventListener("click",function(event){
    switch(event.currentTarget.value){
    case "/":
      operator = "/";
      break;
    case "*":
      operator = "*";
      break;
    case "-":
      operator = "-";
      break;
    case "+":
      operator = "+";
      break;
}
  
  displayArr = [];
  displayScreen = "";
  displayNum = 0;
  displayButton.innerHTML = "0";
  console.log("KKKK", currentValue, secondValue,operator);


  });
}

///EQUAL BUTTON///
var equalButton = document.getElementById("equalButton");
equalButton.addEventListener("click", function(){
  switch(operator){
  case "/" :
    displayNum = calculator.divide(currentValue,secondValue);
    displayButton.innerHTML = displayNum;
    result = displayNum;
    break;
  case "*" :
    displayNum = calculator.multiply(currentValue,secondValue);
    displayButton.innerHTML = displayNum;
    result = displayNum;
    break;
  case "-" :
    displayNum = calculator.subtract(currentValue,secondValue);
    displayButton.innerHTML = displayNum;
    result = displayNum;
    break;
  case "+" :
    displayNum = calculator.add(currentValue,secondValue);
    displayButton.innerHTML = displayNum;
    result = displayNum;
    break;
 }
 operator = null;
 console.log(currentValue,secondValue,result);
 currentValue = result;


});

///SETBALANCE BUTTON///
var setBalanceButton = document.getElementById("getBalance");
setBalanceButton.addEventListener("click",function(){
  displayNum = calculator.returnBalance();
  displayButton.innerHTML = displayNum;
  //console.log(displayNum);
});



///DEPOSIT CASH BUTTON///
var depositButton = document.getElementById("deposit");
depositButton.addEventListener("click",function(){
  displayNum = calculator.deposit(displayNum);

});



///WITHDRAW BUTTON///
var withdrawButton = document.getElementById("withdraw");
withdrawButton.addEventListener("click", function(){
  console.log(displayNum,calculatorModule.balance);
  if(displayNum > calculator.balance){
    displayButton.innerHTML = "not enough funds";
  }else{
    displayNum = calculator.withdraw(displayNum);
    displayButton.innerHTML = displayNum;
  }


  });









//DIVIDE BUTTON
/**var divideButton = document.getElementById("divide");
divideButton.addEventListener("click", function(event){
  operator = "/";
  displayArr = [];
  displayScreen = "";
  displayNum = 0;
  displayButton.innerHTML = "0";
})
**/


//CLEAR: resets memory to 0;
//GET BALANCE: displays balance
//DEPOSIT CASH: add displayed amount to balance
//WITHDRAW CASH: subtract displayed amount from balance