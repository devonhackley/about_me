'use strict';

alert('Hey there!');
var userName = prompt('What is your name? ');
var userChoice = prompt(userName + ' would you like to play a game? Yes or No?');
console.log('This is the question being asked: ' + userChoice);
//declared variables
var numStates = 5;
var userScore = 0;
var totalScore = 0;
var userGuess = 0;
var userTries = 0;
var answerArray = ['pepperoni', 'cheese', 'bacon'];

//start of the game
alert('Let\'s start our game!');
alert('This is a guessing game :)');
alert('You must answer either yes or no to some of these questions and enter your answer for others!');

//These are my question that I ask the user
var firstQuestion = 'Do I like to code?';
//console.log('The questioned asked was: ' + firstQuestion);
var secondQuestion = 'Was I in the military?';
//console.log('The questioned asked was: ' + secondQuestion);
var thirdQuestion = 'Do I have any siblings?';
//console.log('The questioned asked was: ' + thirdQuestion);
var fourthQuestion = 'Do I like the rain?';
//console.log('The questioned asked was: ' + fourthQuestion);
var fifthQuestion = 'Can I touch my toes?';
//console.log('The questioned asked was: ' + fifthQuestion);
var sixthQuestion = 'How many states have I visted? Type a number!';
//console.log(sixthQuestion);
var seventhQuestion = 'Can you guess what my favorite topping is?';
//console.log(seventhQuestion);
var questionArray = [firstQuestion,secondQuestion,thirdQuestion,fourthQuestion,fifthQuestion, sixthQuestion,seventhQuestion];
function consolePrint(idx) {
  // for (var i = 0; i < questionArray.length; i++) {
  console.log('The questioned asked was: ' + questionArray[idx]);
  // }
}
// function that decides if the user is right or wrong
function userAnswer(answer, correct, wrong) {
  if (correct.indexOf(answer.toLowerCase()) !== -1) {
    userScore++;
    alert('That is correct');
    alert('Your score: ' + userScore );
  } else if (wrong.indexOf(answer.toLowerCase()) !== -1) {
    alert('That was wrong :(');
  }else{
    alert('Bad Input!');
  }
}
function sixAnswer() {
  while (userGuess <= 4) {
    var answer = prompt(sixthQuestion);
    if(parseInt(answer) === numStates) {
      alert('That is correct!');
      userScore++;
      alert('Your score is : ' + userScore);
      break;
    } else if (parseInt(answer) < numStates) {
      alert('Sorry too low :(');
      userGuess++;
    } else if (parseInt(answer) > numStates) {
      alert('Sorry too high :( ');
      userGuess++;
    } else {
      alert('That wasn\'t a number!');
    }
  }
}
function sevenAnswer(answer) {
  while(userTries <= 6){
    userTries++;
    console.log('answer7: ', answer7);
    var userCorrect = false;
    for (var i = 0; i < answerArray.length; i++) {
      if(answer7 === answerArray[i]) {
        console.log('answerArray[i]: ', answerArray[i]);
        alert('That is correct!');
        userScore++;
        alert('Your Score: ' + userScore);
        alert('Possible answers: ' + answerArray);
        userCorrect = true;
        break;
      }
    }
    if (userCorrect === true){
      break;
    }
  }
  alert('That\'s it! Awesome Job!');
  alert(userName + ' you got ' + userScore + ' questions correct! Thanks for playing :) ');
}
if(userChoice.toLowerCase() === 'yes' || userChoice.toLowerCase() === 'y') {
  var answer1 = prompt(firstQuestion);
  userAnswer(answer1, ['yes', 'y'],['no', 'n']);
  consolePrint(0);
  var answer2 = prompt(secondQuestion);
  userAnswer(answer2, ['yes', 'y'],['n', 'no']);
  consolePrint(1);
  var answer3 = prompt(thirdQuestion);
  userAnswer(answer3, ['yes','y'],['n', 'no']);
  consolePrint(2);
  var answer4 = prompt(fourthQuestion);
  userAnswer(answer4, ['no', 'n'],['yes', 'y']);
  consolePrint(3);
  var answer5 = prompt(fifthQuestion);
  userAnswer(answer5, ['no', 'n'], ['yes', 'y']);
  consolePrint(4);
  // var answer6 = prompt(sixthQuestion);
  sixAnswer();
  consolePrint(5);
  var answer7 = prompt(seventhQuestion);
  sevenAnswer(answer7);
  consolePrint(6);
}else {
  alert('You\'e lame :(');
}
