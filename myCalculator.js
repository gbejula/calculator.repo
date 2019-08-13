class Calculator {
    constructor (inputTextArea, answerTextArea) {
        this.inputTextArea = inputTextArea;
        this.answerTextArea = answerTextArea;
        this.clear();
    }

    clear() {
        this.answerTextArea = '';
        this.inputTextArea = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        this.inputTextArea = number;
    }

    chooseOperations(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.inputTextArea.innerText = this.inputTextArea
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButtton = document.querySelector('[data-equal]');
const allclearButton = document.querySelector('[data-allclear]');
const inputTextArea = document.querySelector('[data-input]')
const answerTextArea = document.querySelector('[data-answer]')

const calculator = new Calculator(inputTextArea, answerTextArea)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})