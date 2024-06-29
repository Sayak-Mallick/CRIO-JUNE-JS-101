function increamentNumber(a) {
    return a + 1;
}

console.log(increamentNumber(5)); // 6
console.log(increamentNumber(5.0)); // 6
console.log(increamentNumber(5.0000001)); // 6.0000001
console.log(increamentNumber('5')); // 51
console.log(increamentNumber('five')); // NaN
console.log(increamentNumber('5.0')); // 5.01
