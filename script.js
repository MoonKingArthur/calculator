const buttons = document.querySelectorAll('button');
const calcDisplay = document.querySelector("#display")

calcInit();

function calcInit() {
    buttons.forEach(button => {
        button.addEventListener('click', selections)
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


// prints clicked buttons to console
function selections(event) {

  let userSelection = event.target.innerText;    
  console.log(userSelection);

  display.innerHTML = '';
  const toDisplay = document.createElement('p');
  toDisplay.textContent = userSelection;
  calcDisplay.appendChild(toDisplay);

  return userSelection;
  


}