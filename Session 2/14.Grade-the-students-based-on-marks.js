function gradeMarks(marks) {
    if(marks >= 80 && marks <= 100) {
        return 'A';
    }
    else if(marks >= 60 && marks <= 79) {
        return 'B';
    }
    else if(marks >= 50 && marks <= 60) {
        return 'C';
    }
    else if(marks >= 45 && marks <= 50) {
        return 'D';
    }
    else if(marks >= 25 && marks <= 45) {
        return 'E';
    }
    else if(marks >= 0 && marks <= 25) {
        return 'F';
    }
    else {
        return 'Invalid';
    }
}

console.log(gradeMarks(90)); // A
console.log(gradeMarks(70)); // B
console.log(gradeMarks(55)); // C
console.log(gradeMarks(48)); // D
console.log(gradeMarks(30)); // E
console.log(gradeMarks(20)); // F
console.log(gradeMarks(105)); // Invalid