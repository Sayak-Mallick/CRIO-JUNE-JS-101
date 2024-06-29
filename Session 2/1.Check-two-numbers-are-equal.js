function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEqual(5, 5)); // true
console.log(isEqual(5, 6)); // false
console.log(isEqual(5, '5')); // false
console.log(isEqual(5, 'five')); // false
console.log(isEqual(5, '5.0')); // false
console.log(isEqual(5, 5.0)); // true
console.log(isEqual(5, 5.0000001)); // false
