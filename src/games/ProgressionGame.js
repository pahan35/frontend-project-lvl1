const getRandomNumber = (max) => Math.floor(Math.random() * max);

export default class ProgressionGame {
  constructor() {
    this.MAX_INITIAL_NUMBER = 10;
    this.MAX_MULTIPLIER = 5;
    this.PROGRESSION_LENGTH = 10;
  }

  checkAnswer(answer) {
    const correctAnswer = this.question.hidden.toString();
    return [answer === correctAnswer, correctAnswer];
  }

  prepareQuestion() {
    const initialNumber = getRandomNumber(this.MAX_INITIAL_NUMBER);
    const multiplier = getRandomNumber(this.MAX_MULTIPLIER) + 1;
    const hideNumber = getRandomNumber(this.PROGRESSION_LENGTH);
    const progression = [initialNumber];
    for (let i = 1; i < this.PROGRESSION_LENGTH; i += 1) {
      progression.push(initialNumber + i * multiplier);
    }
    const hidden = progression[hideNumber];
    this.question = {
      hidden,
    };
    return progression.reduce((carry, item) => `${carry} ${item === hidden ? 'x' : item}`, '');
  }

  // eslint-disable-next-line class-methods-use-this
  printRules() {
    console.log('What number is missing in the progression?');
  }
}
