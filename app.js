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
  if (correct.indexof(answer.toLowerCase()) !== -1) {
    userScore++;
    alert('That is correct');
    alert('Your score: ' + userScore );
  } else if (wrong.indexof(answer.toLowerCase()) !== -1) {
    alert('That was wrong :(');
  }else{
    alert('Bad Input!');
  }
}
function sixAnswer(answer) {
  while (userGuess <= 4) {
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
  userAnswer(answer5 ['no', 'n'], ['yes', 'y']);
  consolePrint(4);
  var answer6 = prompt(sixthQuestion);
  sixAnswer(answer6);
  consolePrint(5);
  var answer7 = prompt(seventhQuestion);
  sevenAnswer(answer7);
  consolePrint(6);
}else {
  alert('You\'e lame :(');
}
// if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
//   userScore++;
//   alert('That is correct');
//   alert('Your score: ' + userScore );
// } else {
//   alert('That was wrong :(');
//}
// console.log('Asks the user the first question, if correct, score is updated');
// var answer2 = prompt(secondQuestion);
// if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
//   userScore++;
//   alert('That is correct');
//   alert('Your score: ' + userScore );
// } else {
//   alert('That was wrong :(');
// }
// console.log('Asks the user the second question, if correct, score is updated');
// var answer3 = prompt(thirdQuestion);
// if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
//   userScore++;
//   alert('That is correct');
//   alert('Your score: ' + userScore );
// } else {
//   alert('That was wrong :(');
// }
// console.log('Asks the user the third question, if correct, score is updated');
// var answer4 = prompt(fourthQuestion);
// if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
//   userScore++;
//   alert('That is correct');
//   alert('Your score: ' + userScore );
// } else {
//   alert('That was wrong :(');
// }
// console.log('Asks the user the fourth question, if correct, score is updated');
// var answer5 = prompt(fifthQuestion);
// if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
//   userScore++;
//   alert('That is correct');
//   alert('Your score: ' + userScore );
// } else {
//   alert('That was wrong :(');
// }
// console.log('Asks the user the fifth question, if correct, score is updated');
// console.log('Question 6 is contained in a while loop, the user only gets 4 guesses');
// var answer6 = prompt(sixthQuestion);
// function sixAnswer(answer) {
//   while (userGuess <= 4) {
//     if(parseInt(answer) === numStates) {
//       alert('That is correct!');
//       userScore++;
//       alert('Your score is : ' + userScore);
//       break;
//     } else if (parseInt(answer) < numStates) {
//       alert('Sorry too low :(');
//       userGuess++;
//     } else if (parseInt(answer) > numStates) {
//       alert('Sorry too high :( ');
//       userGuess++;
//     } else {
//       alert('That wasn\'t a number!');
//     }
//   }
//   // }
// var answer7 = prompt(seventhQuestion);
//
//   while(userTries <= 6){
//     userTries++;
//     console.log('answer7: ', answer7);
//     var userCorrect = false;
//     for (var i = 0; i < answerArray.length; i++) {
//       if(answer7 === answerArray[i]) {
//         console.log('answerArray[i]: ', answerArray[i]);
//         alert('That is correct!');
//         userScore++;
//         alert('Your Score: ' + userScore);
//         alert('Possible answers: ' + answerArray);
//         userCorrect = true;
//         break;
//       }
//     }
//     if (userCorrect === true){
//       break;
//     }
//   }
//   alert('That\'s it! Awesome Job!');
//   alert(userName + ' you got ' + userScore + ' questions correct! Thanks for playing :) ');
