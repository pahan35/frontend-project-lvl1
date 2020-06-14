export default class EvenGame {
  constructor() {
    this.ANSWERS = {
      NO: 'no',
      YES: 'yes',
    };
  }

  checkAnswer(answer) {
    const correctAnswer = this.question % 2 === 0 ? this.ANSWERS.NO : this.ANSWERS.YES;
    if (!Object.values(this.ANSWERS).includes(answer)) {
      return [false, correctAnswer];
    }
    return [answer === correctAnswer, correctAnswer];
  }

  prepareQuestion() {
    this.question = Math.floor(Math.random() * 35);
    return this.question;
  }

  printRules() {
    console.log(`Answer "${this.ANSWERS.YES}" if the number is even, otherwise answer "${this.ANSWERS.NO}".`);
  }
}
