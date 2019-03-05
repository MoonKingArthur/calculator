const buttons = document.querySelectorAll('button');
const calcDisplay = document.querySelector("#display")
let num1 = '';
let num2 = '';
let operator = '';
let currentSelection = '';
let selections = [];

calcInit();

function calcInit() {
  buttons.forEach(button => {
    button.addEventListener('click', (event)=>{
      currentSelection = event.target.innerText;
      selections.push(currentSelection);
      console.log(currentSelection);
      varAssignment(currentSelection);
    })
  });
    
}

function operate(num1,operator,num2) {
  // console.log("outcome of logging operator is: " + operator);
  // console.log("outcome of logging num2 is: " + num2);
  // // num2 is returning as num2=

  switch (operator) {
    case '/':
      return Number(num1) / Number(num2);
    case '*':
      return Number(num1) * Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '+':
      return Number(num1) + Number(num2);
    // default:
    //   console.log("Sorry, we don't support " + operator + '.');
  }

}

function varAssignment(currentSelection) {

  if (currentSelection === "=") {
    return displayInfo();
  }

  // TODO clears DOM visually but data is still there.
  if (currentSelection === "C") {
    return calcDisplay.innerHTML = "";
  }
  
  if (currentSelection.match(/\*|-|\+|\//)) {
		if (num1) {
	    operator = currentSelection;
		}
    } else if (num1 && operator) {
      num2 += currentSelection;
    } else {
      num1 += currentSelection;
    }
    displayInfo();
    
}

function displayInfo() {
	calcDisplay.innerHTML = "";
  const info = document.createElement('p');
	info.innerText = `${num1} ${operator} ${num2}`;
  calcDisplay.appendChild(info);

  if (currentSelection === "=") {
    calcDisplay.innerHTML = "";
    const info = document.createElement('p');
    // console.log(typeof operate(num1,operator,num2));
    
    info.innerText = operate(num1,operator,num2);
    calcDisplay.appendChild(info);
  }
}

