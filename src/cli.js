import readlineSync from 'readline-sync';

function greetUser() {
  console.log('Welcome to the Brain Games!');
  var userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
}

export default greetUser;
