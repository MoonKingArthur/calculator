const buttons = document.querySelectorAll('button');
const calcDisplay = document.querySelector("#display")
let num1 = '';
let num2 = '';
let operator = '';

calcInit();

function calcInit() {
  buttons.forEach(button => {
    button.addEventListener('click', (event)=>{
      const currentSelection = event.target.innerText;
      console.log(currentSelection);
      varAssignment(currentSelection);
    })
  });
    operate();
}

function operate(num1,operator,num2) {

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
// console.log(operate(10,"+",2));


function varAssignment(currentSelection) {
  console.log(currentSelection);
  
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
	info.innerText = `num1: ${num1} | num2: ${num2} | Operator: ${operator}`;
	calcDisplay.appendChild(info);
}