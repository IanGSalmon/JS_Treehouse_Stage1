/*
5 questions
keep track of correct answer
message with number correct
all 5 is gold crown, 3-4, silver, 12 is bronze, 0 none
*/

var correctAnswers = 0;
var questionOne = prompt("What color is the sky?");
var questionTwo = prompt("What is the best form of precipitation?");
var questionThree = prompt("Who is the best wife in the world?");
var questionFour = prompt("What is the best game in the world?");
var questionFive = prompt("What is the best food group?");

if (questionOne.toUpperCase() === "BLUE") {
    correctAnswers += 1;
}

if (questionTwo.toUpperCase() === "SNOW") {
    correctAnswers += 1;
}

if (questionThree.toUpperCase() === "ANNA") {
    correctAnswers += 1;
}

if (questionFour.toUpperCase() === "ZELDA") {
    correctAnswers += 1;
}

if (questionFive.toUpperCase() === "PIZZA") {
    correctAnswers += 1;
}


if (correctAnswers === 0) {
    document.write("<p>You got " + correctAnswers + " out of 5 correct. Sorry, you didn't earn a medal.</p>");
} else if (correctAnswers >= 1 && correctAnswers < 3) {
    document.write("<p>You got " + correctAnswers + " out of 5 correct. You earned a bronze medal!</p>");
} else if (correctAnswers >= 3 && correctAnswers < 5) {
    document.write("<p>You got " + correctAnswers + " out of 5 correct. You earned a silver medal!</p>");
} else {
    document.write("<p>You got " + correctAnswers + " out of 5 correct. You earned a gold medal!</p>");
}