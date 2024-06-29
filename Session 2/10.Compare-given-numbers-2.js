function compareNumbers (a, b, c) {
    if(a === b || b === c) {
        return true;
    }
    else {
        return false;
    }
}

console.log(compareNumbers(1, 2, 3));
console.log(compareNumbers(1, 2, 2));
console.log(compareNumbers(1, 1, 2));
console.log(compareNumbers(1, 1, 1));
console.log(compareNumbers(1, 2, 1));