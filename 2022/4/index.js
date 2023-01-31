const fs = require('fs')

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\r\n')
// console.log(input);

const test = fs.readFileSync(`${__dirname}/test.txt`).toString().split('\r\n')
console.log(test);

const pairs = input.map(line => line.split(','))
console.log(pairs, 'pairs');

const selfcontained = pairs.filter(range => {
    const first = range[0].split('-').map(string => Number(string))
    const second = range[1].split('-').map(string => Number(string))
    return (first[0] >= second[0] && first[0] <= second[1]) ||
        (second[0] >= first[0] && second[0] <= first[1])
})

console.log(selfcontained, 'selfcontained');
console.log(selfcontained.length);