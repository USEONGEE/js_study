const arr = `10
5
2
3
1
4
2
3
5
1
7`.toString().trim().split('\n').map(imte=> +item);


// const arr = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n').map(imte=> +item);



for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            const tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }
}
console.log(arr);