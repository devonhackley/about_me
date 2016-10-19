'use strict';

alert('Hey there!');
var userChoice = prompt('Would you like to play a game? Yes or No?');
console.log('This is the question being asked: ' + userChoice);
if(userChoice.toLowerCase() === 'yes' || userChoice.toLowerCase() === 'y') {
  var numStates = 5;
  var userScore = 0;
  var totalScore = 0;
  var userGuess = 4;
  alert('Let\'s start our game!');
  alert('This is a guessing game :)');
  alert('You must answer either yes or no to these questions');

  //These are my question that I ask the user
  var firstQuestion = 'Do I like to code?';
  console.log('The questioned asked was: ' + firstQuestion);
  var secondQuestion = 'Was I in the military?';
  console.log('The questioned asked was: ' + secondQuestion);
  var thirdQuestion = 'Do I have any siblings?';
  console.log('The questioned asked was: ' + thirdQuestion);
  var fourthQuestion = 'Do I like the rain?';
  console.log('The questioned asked was: ' + fourthQuestion);
  var fifthQuestion = 'Can I touch my toes?';
  console.log('The questioned asked was: ' + fifthQuestion);
  var sixthQuestion = 'How many states have I visted? Type a number!';
  console.log(sixthQuestion);
  var seventhQuestion = 'Can you guess what my favorite topping is?';
  console.log(seventhQuestion);

//Question blocks
  var question1 = prompt(firstQuestion);
  if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
    userScore++;
    alert('That is correct');
    alert('Your score: ' + userScore );
  } else {
    alert('That was wrong :(');
  }
  var question2 = prompt(secondQuestion);
  if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y') {
    userScore++;
    alert('That is correct');
    alert('Your score: ' + userScore );
  } else {
    alert('That was wrong :(');
  }
  var question3 = prompt(thirdQuestion);
  if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
    userScore++;
    alert('That is correct');
    alert('Your score: ' + userScore );
  } else {
    alert('That was wrong :(');
  }
  var question4 = prompt(fourthQuestion);
  if (question4.toLowerCase() === 'no' || question4.toLowerCase() === 'n') {
    userScore++;
    alert('That is correct');
    alert('Your score: ' + userScore );
  } else {
    alert('That was wrong :(');
  }
  var question5 = prompt(fifthQuestion);
  if (question5.toLowerCase() === 'no' || question5.toLowerCase() === 'n') {
    userScore++;
    alert('That is correct');
    alert('Your score: ' + userScore );
    // totalScore = userScore;
    // alert('Total Score:  ' + totalScore);
  } else {
    alert('That was wrong :(');
    // alert('Total Score:  ' + totalScore);
  }
  var question6 = prompt(sixthQuestion);
  if (question6 === numStates) {
    alert('That is correct!');
    userScore++;
    alert(userScore);
  } else if (question6 < numStates) {
    alert('Sorry too low :( ');
  }

}else {
  alert('You\'e lame :(');
}
