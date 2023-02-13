const fs = require('fs')

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\r\n\r\n')
// console.log(input);

const test = fs.readFileSync(`${__dirname}/test.txt`).toString().split('\r\n\r\n')
// console.log(test);


const getSplitInput = (stingInput) => {
    const crates = stingInput[0].split('\r\n')
    const moves = stingInput[1].split('\r\n')
    console.log(crates, moves);
    return { crates, moves }
}

const { crates, moves } = getSplitInput(input)


const getMax = (crates) => {
    const numbers = crates[crates.length - 1].match(/\d+/g).map(string => +string)
    console.log(numbers);

    const max = Math.max(...numbers)
    console.log(max);
    return max
}

const max = getMax(crates)

const getStacks = (crates, max) => {

    let stacks = []
    for (let i = 0; i < max; i++) {
        stacks.push([])
    }

    for (let j = crates.length - 2; j >= 0; j--) {
        let stackNum = 0;
        let symbolsPassed = 0

        while (symbolsPassed < crates[j].length) {
            const crate = crates[j].substring(symbolsPassed, symbolsPassed + 3).trim();
            if (crate !== '') {
                stacks[stackNum].push(crate.charAt(1));
            }
            stackNum++;
            symbolsPassed += 4
        }

    }
    console.log(stacks);
    return stacks
}

const stacks = getStacks(crates, max)

const executeMoves = (moves, stacks, reversed) => {
    for (const move of moves) {
        const splitMove = move.split(' ')

        const count = +splitMove[1];
        const from = +splitMove[3] - 1;
        const to = +splitMove[5] - 1;

        const toBeMoved = []
        for (let k = 0; k < count; k++) {
            toBeMoved.push(stacks[from].pop())
        }

        console.log(move);
        reversed ? stacks[to].push(...toBeMoved.reverse()) : stacks[to].push(...toBeMoved)
    }
    return stacks
}

// const finalStacks = executeMoves(moves, stacks)
const finalStacks2 = executeMoves(moves, stacks, true)
// console.log(finalStacks);
console.log(finalStacks2);

const getTopStacks = (stacks) => {
    let topStacks = ''
    for (const stack of stacks) {
        topStacks += stack[stack.length - 1];
    }
    return topStacks
}

// const topStacks = getTopStacks(finalStacks)
const topStacks2 = getTopStacks(finalStacks2)

// console.log(topStacks);
console.log(topStacks2);