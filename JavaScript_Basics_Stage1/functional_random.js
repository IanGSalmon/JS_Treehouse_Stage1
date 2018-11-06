/*
function alertRandom() {
    var randomNumber = Math.floor( Math.random() * 6) + 1;
    alert(randomNumber);
}

alertRandom();
*/

function getRandomNumber(upper) {
    var randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
}

alert(getRandomNumber(10));

function getRectangleArea(length, width) {
    var area = length * width;
    return area;
}

console.log(getRectangleArea(2, 3));