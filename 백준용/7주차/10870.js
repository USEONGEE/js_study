// 피보나치

let input = Number(require("fs").readFileSync('/dev/stdin').toString().trim());

const fibo = (x) => {
    if (x == 0) return 0
    if (x == 1) return 1
    return fibo(x - 1) + fibo(x - 2)
}
console.log(fibo(input))