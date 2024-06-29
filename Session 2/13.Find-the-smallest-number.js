function findSmallest(a, b, c) {
    if(a < b && a < c) {
        return a;
    }
    else if(b < a && b < c){
        return b;
    }
    else {
        return c;
    }
}


console.log(findSmallest(1, 2, 3));
console.log(findSmallest(3, 2, 1));
console.log(findSmallest(2, 3, 1));
console.log(findSmallest(3, 1, 2));
console.log(findSmallest(2, 1, 3));