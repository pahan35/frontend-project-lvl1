import readlineSync from 'readline-sync';

export function askName() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export default function cli() {
  askName();
}
