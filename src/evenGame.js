import readlineSync from 'readline-sync';
import { askName } from './cli.js';

const ANSWERS = {
  NO: 'no',
  YES: 'yes',
};

const NUMBERS_IN_GAME = 3;

function checkAnswer(number, answer) {
  const correctAnswer = number % 2 === 0 ? ANSWERS.NO : ANSWERS.YES;
  if (!Object.values(ANSWERS).includes(answer)) {
    return [false, answer, correctAnswer];
  }
  return [answer === correctAnswer, answer, correctAnswer];
}

function askQuestion() {
  const number = Math.floor(Math.random() * 35);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  return checkAnswer(number, answer);
}

export default function evenGame() {
  const name = askName();
  console.log(`Answer "${ANSWERS.YES}" if the number is even, otherwise answer "${ANSWERS.NO}".`);
  let i = 0;
  while (i < NUMBERS_IN_GAME) {
    i += 1;
    const [result, answer, correctAnswer] = askQuestion();
    if (!result) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    if (i === NUMBERS_IN_GAME) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
}
