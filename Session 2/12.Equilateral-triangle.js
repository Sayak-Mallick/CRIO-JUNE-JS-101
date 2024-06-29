function isEquilateralType(side1,side2, side3){
    if(side1 === side2 && side2 === side3){
        return true;
    }
    else {
        return false;
    }
}


console.log(isEquilateralType(3,3,3)); // true
console.log(isEquilateralType(3,3,4)); // false
console.log(isEquilateralType(3,4,3)); // false
console.log(isEquilateralType(4,3,3)); // false
console.log(isEquilateralType(3,4,5)); // false