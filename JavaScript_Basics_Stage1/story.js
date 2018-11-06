var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';
var userAjd = prompt("Enter an adjective" + questionsLeft);
questions -= 1;
var questionsLeft = ' [' + questions + ' questions left]';
var userNoun = prompt("Enter a noun" + questionsLeft);
questions -= 1;
var questionsLeft = ' [' + questions + ' questions left]';
var userVerb = prompt("Enter a verb" + questionsLeft);

var userStatement = "There once was a " + userAjd + " " + userNoun + " that loved to " + userVerb;

document.write(userStatement);