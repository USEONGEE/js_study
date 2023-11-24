const fs = require('fs');
const readFileSyncAddress = 'input.txt';

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

[n, ...arr] = input;
n = Number(n);
arr = arr.map(i => i.split(' ').map(v => Number(v)));
solution(n, arr);

function solution(n, arr) {
    let dp = new Array(n).fill(1);
    
    arr.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < n; i++) {
        const current = arr[i][1];
        let count = 0;
        for (let j = 0; j < i; j++) {
            const before = arr[j][1];
            if (current > before) count = Math.max(count, dp[j]);
        }
        dp[i] = count + 1;
    }
	
    console.log(n - Math.max(...dp));
}