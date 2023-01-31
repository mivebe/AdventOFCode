const fs = require('fs')

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\r\n\r\n')
// console.log(input);

const test = fs.readFileSync(`${__dirname}/test.txt`).toString().split('\r\n\r\n')
console.log(test);

const totalGroups = input.map(group => group.split('\r\n').reduce((x, y) => Number(x) + Number(y), 0))
console.log(totalGroups);
const sortedGroups = totalGroups.sort((a, b) => b - a)
console.log(sortedGroups, 'sorted');
const result1 = Math.max(...totalGroups)
console.log(result1);
const result2 = sortedGroups[0] + sortedGroups[1] + sortedGroups[2]
console.log(result2);