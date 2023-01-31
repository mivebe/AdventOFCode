const fs = require('fs')

// todo .replace(/r/g,'') first and then .split('\n) to stop issuses on windows  \r\n is windows platform newline

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().trim().split('\r\n')
// console.log(input);

const test = fs.readFileSync(`${__dirname}/test.txt`).toString().trim().split('\r\n')
console.log(test);

const createTree = (lines) => {
    const tree = {
        name: "/root",
        isDirectory: true,
        children: [],
    };

    let curNode = tree;
    let curCommand = null;

    for (const line of lines) {
        if (line[0] === "$") {

            const match = line.match(/^\$ (?<command>\w+)(?: (?<arg>.+))?$/)

            curCommand = match.groups.command;

            if (curCommand === "cd") {

                const target = match.groups.arg;

                switch (target) {
                    case "/":
                        curNode = tree;
                        break;
                    case "..":
                        curNode = curNode.parent;
                        break;
                    default:
                        curNode = curNode.children.find(folder => folder.isDirectory && folder.name === target);
                }
            }
        }

        if (curCommand === "ls") {

            const fileMatch = line.match(/^(?<size>\d+) (?<name>.+)$/);

            if (fileMatch) {
                const node = {
                    name: fileMatch.groups.name,
                    size: parseInt(fileMatch.groups.size),
                    isDirectory: false,
                    parent: curNode,
                };
                curNode.children.push(node);
            }

            const dirMatch = line.match(/^dir (?<name>.+)$/);

            if (dirMatch) {
                const node = {
                    name: dirMatch.groups.name,
                    isDirectory: true,
                    children: [],
                    parent: curNode,
                };
                curNode.children.push(node);
            }
        }
    }

    return tree;
}

const printTree = (node, depth = 0) => {
    console.log(`${'    '.repeat(depth)}- ${node.isDirectory ? `/${node.name}` : `${node.name}  ${node.size} b`}`);

    if (node.isDirectory) node.children.map(child => printTree(child, depth + 1))
}

const calcSize = (node, callback = () => { }) => {
    if (!node.isDirectory) return node.size;

    const directorySize = node.children
        .map((child) => calcSize(child, callback))
        .reduce((a, b) => a + b, 0);

    callback(node.name, directorySize)

    return directorySize
}

const calcSmallTotal = (lines, maxSize = 100000) => {
    const tree = createTree(lines);

    printTree(tree);

    let totalSmallFolders = 0;

    calcSize(tree, (name, size) => {
        if (size < maxSize) totalSmallFolders += size;
    });

    console.log(totalSmallFolders);
}

const getSmallestEligible = (lines, totalDiskSpace = 70000000, requiredSpace = 30000000) => {

    const tree = createTree(lines);

    const usedSpace = calcSize(tree);
    const availableSpace = totalDiskSpace - usedSpace;

    const minSize = requiredSpace - availableSpace;

    const bigFolders = [];

    calcSize(tree, (name, size) => {
        if (size >= minSize) bigFolders.push({ name, size });
    });

    bigFolders.sort((a, b) => a.size - b.size);

    console.log(bigFolders[0].size);
}

calcSmallTotal(test);
getSmallestEligible(input);