function  findLargest(a, b){
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(findLargest(1, 2));
console.log(findLargest(3, 4));
console.log(findLargest(5, 6));
console.log(findLargest(10, 3));
console.log(findLargest(9, 10));