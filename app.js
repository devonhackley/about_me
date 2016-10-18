'use strict';

alert('Hey there!');
var userChoice = prompt('Would you like to play a game? Yes or No?');
console.log('This is the question being asked: ' + userChoice);
if(userChoice.toLowerCase() ===  'yes'|| userChoice.toLowerCase() === 'y') {

  var userScore = 0;
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

  var question1 = prompt(firstQuestion);
  if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
    userScore++;
    alert('That is correct');
  } else {
    alert('That was wrong :(');

  }



}else {
  alert('You\'e lame :(');
}
