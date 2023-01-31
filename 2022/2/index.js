const fs = require('fs')

const input = fs.readFileSync(`${__dirname}/input.txt`).toString()
// console.log(input);

const test = fs.readFileSync(`${__dirname}/test.txt`).toString()
// console.log(test);

// r 1
// p 2
// s 3

// win 6

// x lose
// y draw
// z win

const outcomes = {
    'AX': 4,
    'AY': 8,
    'AZ': 3,
    'BX': 1,
    'BY': 5,
    'BZ': 9,
    'CX': 7,
    'CY': 2,
    'CZ': 6,
}

const outcomes2 = {
    'AX': 3,
    'AY': 4,
    'AZ': 8,
    'BX': 1,
    'BY': 5,
    'BZ': 9,
    'CX': 2,
    'CY': 6,
    'CZ': 7,
}

const result = input.replace(/ /g, '')
    .match(/\w\w/g)
    .reduce((x, y) => Number(x) ? x + outcomes2[y] : outcomes2[x] + outcomes2[y])

console.log(result);