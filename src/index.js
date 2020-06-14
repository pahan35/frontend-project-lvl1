import readlineSync from 'readline-sync';
import { askName } from './cli.js';

const STEPS_IN_GAME = 3;

export default function launchGame(game) {
  const name = askName();
  game.printRules();
  let i = 0;
  while (i < STEPS_IN_GAME) {
    i += 1;
    const question = game.prepareQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const [result, correctAnswer] = game.checkAnswer(answer);
    if (!result) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    if (i === STEPS_IN_GAME) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
}
