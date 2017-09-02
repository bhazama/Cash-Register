console.log("sanity check");

var displayElem = document.getElementById("display");


var rowOne = document.getElementsByClassName("row1");

for(var i = 0; i < rowOne.length; i++){
  rowOne[i].addEventListener("click",setBalance(500));
}

function displayItem(){
  displayElem.innerHTML = this.value;
}

//CLEAR: resets memory to 0;
//GET BALANCE: displays balance
//DEPOSIT CASH: add displayed amount to balance
//WITHDRAW CASH: subtract displayed amount from balance