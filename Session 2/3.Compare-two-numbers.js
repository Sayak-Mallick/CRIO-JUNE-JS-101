function isDecending(a,b,c) {
    if( a > b && b > c) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isDecending(5, 4, 3)); // true
console.log(isDecending(5, 5, 3)); // false
console.log(isDecending(5, 6, 3)); // false
console.log(isDecending(5, 3, 3)); // false
console.log(isDecending(5, 3, 5)); // false
console.log(isDecending(5, 3, 6)); // false
