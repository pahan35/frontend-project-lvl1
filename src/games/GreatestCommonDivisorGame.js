const getRandomNumber = (max) => Math.floor(Math.random() * max);

function greatestCommonDivisor(firstNumber, secondNumber) {
  if (!secondNumber) {
    return Math.abs(firstNumber);
  }
  return greatestCommonDivisor(secondNumber, Math.abs(firstNumber % secondNumber));
}

export default class GreatestCommonDivisorGame {
  constructor() {
    this.MAX_NUMBER = 100;
  }

  checkAnswer(answer) {
    const { firstNumber, secondNumber } = this.question;
    const correctAnswer = greatestCommonDivisor(firstNumber, secondNumber).toString();
    return [answer === correctAnswer, correctAnswer];
  }

  prepareQuestion() {
    const firstNumber = getRandomNumber(this.MAX_NUMBER);
    const secondNumber = getRandomNumber(this.MAX_NUMBER);
    this.question = {
      firstNumber,
      secondNumber,
    };
    return `${firstNumber} ${secondNumber}`;
  }

  // eslint-disable-next-line class-methods-use-this
  printRules() {
    console.log('Find the greatest common divisor of given numbers.');
  }
}
