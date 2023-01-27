

const { log } = require('console');
const fs = require('fs')

// const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\r\n\r\n')
// // console.log(input);
const test = fs.readFileSync(`${__dirname}/test.txt`).toString()
console.log(test);
console.log(test.match(/\d+/g));
console.log(test.match(/dir (\w)/g));
const dirs = test.match(/dir (\w)/g)
const asd = dirs.map(dirName=> {
    const regex = new RegExp(dirName,'g')
    return test.match(regex)
})
console.log(asd.flat(1),'asd');
console.log(test.match(/dir a/g));
console.log(test.match(/(?<=asd\s)(\d*?)(?=\s*asd)/g));