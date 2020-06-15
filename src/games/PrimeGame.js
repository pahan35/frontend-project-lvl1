const PRIME_NUMBERS = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
];

export default class EvenGame {
  constructor() {
    this.ANSWERS = {
      NO: 'no',
      YES: 'yes',
    };
    this.MAX_NUMBER = PRIME_NUMBERS[PRIME_NUMBERS.length - 1] + 1;
  }

  checkAnswer(answer) {
    const correctAnswer = PRIME_NUMBERS.includes(this.question)
      ? this.ANSWERS.YES : this.ANSWERS.NO;
    if (!Object.values(this.ANSWERS).includes(answer)) {
      return [false, correctAnswer];
    }
    return [answer === correctAnswer, correctAnswer];
  }

  prepareQuestion() {
    this.question = Math.floor(Math.random() * this.MAX_NUMBER);
    return this.question;
  }

  printRules() {
    console.log(`Answer "${this.ANSWERS.YES}" if the number is prime, otherwise answer "${this.ANSWERS.NO}".`);
  }
}
