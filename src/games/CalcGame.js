const getRandomNumber = (max) => Math.floor(Math.random() * max);

export default class CalcGame {
  constructor() {
    this.MAX_NUMBER = 30;
    this.OPERATIONS = { PLUS: '+', MINUS: '-', MULTIPLY: '*' };
  }

  checkAnswer(answer) {
    const correctAnswer = (() => {
      switch (this.question.operator) {
        case this.OPERATIONS.PLUS:
          return this.question.firstNumber + this.question.secondNumber;
        case this.OPERATIONS.MINUS:
          return this.question.firstNumber - this.question.secondNumber;
        case this.OPERATIONS.MULTIPLY:
          return this.question.firstNumber * this.question.secondNumber;
        default:
          throw new ReferenceError(`Unknown operator: ${this.question.operator}`);
      }
    })().toString();
    return [answer === correctAnswer, correctAnswer];
  }

  prepareQuestion() {
    const firstNumber = getRandomNumber(this.MAX_NUMBER);
    const secondNumber = getRandomNumber(this.MAX_NUMBER);
    const operations = Object.values(this.OPERATIONS);
    const operator = operations[getRandomNumber(operations.length)];
    this.question = {
      firstNumber,
      secondNumber,
      operator,
    };
    return `${firstNumber} ${operator} ${secondNumber}`;
  }

  // eslint-disable-next-line class-methods-use-this
  printRules() {
    console.log('What is the result of the expression?');
  }
}
