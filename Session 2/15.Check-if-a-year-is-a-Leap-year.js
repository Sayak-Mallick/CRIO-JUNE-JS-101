function checkLeapYear (year) {
    if((year % 400 === 0) || (year % 4 ===0 && year % 100 !== 0)){
        return "Leap Year";
    }
    else{
        return "Common Year";
    }
}

console.log(checkLeapYear(2000));
console.log(checkLeapYear(2004));
console.log(checkLeapYear(2009));
console.log(checkLeapYear(2012));
console.log(checkLeapYear(2014));
console.log(checkLeapYear(2020));
console.log(checkLeapYear(2023));
console.log(checkLeapYear(2028));
