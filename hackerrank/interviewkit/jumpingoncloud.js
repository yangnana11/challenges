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
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    if (c.length==1) return 0;
    let count=0;
    for (let i=0; i<c.length; i++) {
        if (c[i]==1) continue;
        count++;
        if (i+2<c.length) {
            if (c[i+1]==0 && c[i+2]==0) {
                i++;
            }
        }
    }
    return count-1;
}

/**
 * input
 * 7
 * 0 0 1 0 0 1 0
 */
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c);
    
    ws.write(result + '\n');

    ws.end();
}
