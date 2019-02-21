const buttons = document.querySelectorAll('button');

function operate(operator,num1,num2) {
    let add = (num1,num2) => num1 + num2;
    let subtract = (num1,num2) => num1 - num2;
    let multiply = (num1,num2) => num1 * num2;
    let divide = (num1,num2) => num1 / num2;

    
}

calcInit();

function calcInit() {
    buttons.forEach(button => {
        button.addEventListener('click', selections)
    });
}

function selections(event) {
    let userSelection = event.target.innerText;
    console.log(userSelection);
    // return userSelection;
}