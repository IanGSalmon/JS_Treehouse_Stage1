// function accepts lower and upper value

function getRandomNumber( lower, upper) {
    if (isNaN(lower) || isNaN(upper)) {
        throw new Error("Both arguments must be numbers");
    }
    var random = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return random;
}

alert(getRandomNumber('two', 3));