const buttons = document.querySelectorAll('button');
const calcDisplay = document.querySelector("#display")

calcInit();

function calcInit() {
  buttons.forEach(button => {
    button.addEventListener('click', (event)=>{
      const currentSelection = event.target.innerText;
      console.log(currentSelection);
      lastSelectionDisplay(currentSelection); 
      // varAssignment(currentSelection);
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


function lastSelectionDisplay(currentSelection) {
    display.innerHTML = '';
    const toDisplay = document.createElement('p');
    toDisplay.textContent = currentSelection;
    calcDisplay.appendChild(toDisplay);
}


// example from briggs
// let num1 = '';
// let num2 = '';
// let thing = '';

// document.querySelectorAll("button").forEach(element => element.addEventListener('click', buttonHandler));

// function buttonHandler(event) {
// 	const inputValue = event.target.value;
//   if (inputValue === 'huh?') {
// 		if (num1) {
// 	    thing = inputValue;
// 		}
// 	} else if (num1 && thing) {
// 		num2 += inputValue;
// 	} else {
// 		num1 += inputValue;
// 	}

// 	displayInfo();
// }

// const display = document.querySelector('.display')
// function displayInfo() {
// 	display.innerHTML = ""
//   const info = document.createElement('p');
// 	info.innerText = `num1: ${num1} | num2: ${num2} | thing: ${thing}`
// 	display.appendChild(info);
// }