'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    const repeatA = s.split("").filter(c=>c=="a").length;
    if (repeatA==0) return 0;
    const remainLength = n%s.length;
    let remainRepeatLength=0;
    if (remainLength>0) {
        const remainRepeatA = remainLength>0 ? s.slice(0,remainLength) : [];
        remainRepeatLength = remainRepeatA.split("").filter(c=>c=="a").length;
    }
    console.log({repeatA, remainLength, remainRepeatLength, n, s});
    return (repeatA*Math.floor(n/s.length))+remainRepeatLength;
}
/**
 * example input
 * aab
 * 882787
 */
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
