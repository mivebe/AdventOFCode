const fs = require('fs')

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\r\n')
// console.log(input);

const test = fs.readFileSync(`${__dirname}/test.txt`).toString().split('\r\n')
// console.log(test);

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const findCommons = (arrays) => {

    const result = [];
    for (let i = 0; i < arrays.length; i++) {
        result.push(arrays[i].shift().reduce((res, v) => {
            if (res.indexOf(v) === -1 && arrays[i].every(a => a.indexOf(v) !== -1)) res.push(v);
            return res;
        }, []))

    }
    return result.flat()

    // console.log(arrays.map(inner => inner.shift().reduce((res, v) => {
    //     if (res.indexOf(v) === -1 && inner.every(a => a.indexOf(v) !== -1)) res.push(v);
    //     return res;
    //     }, []))
    // )
}

const getSplitLines = (lines) => lines.map(line => [line.slice(0, line.length / 2).split(''), line.slice(line.length / 2, line.length).split('')]);

const getGroupedLines = (lines) => {

    let groups = (lines.length - 1) / 3
    let result = []

    for (let i = 0; i < groups; i++) {
        let target = i * 3
        result.push([])
        for (let j = 0; j < 3; j++) {
            result[i].push(lines[target + j].split(''))
        }
    }
    return result
}

const splitLines = getSplitLines(input);
// console.log(splitLines);
const commons = findCommons(splitLines);
// console.log(commons, 'commons');

const groupedLines = getGroupedLines(input);
// console.log(groupedLines, 'groupedLines');
const commons2 = findCommons(groupedLines);
// console.log(commons2, 'commons2');

const values = commons.map(letter => alphabet.indexOf(letter) + 1);
// console.log(values);
const values2 = commons2.map(letter => alphabet.indexOf(letter) + 1);
// console.log(values2);

const result = values.reduce((x, y) => x + y, 0);
console.log(result);
const result2 = values2.reduce((x, y) => x + y, 0);
console.log(result2);