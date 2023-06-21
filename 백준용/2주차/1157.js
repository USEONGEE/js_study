
const data = {};
// `appllle`.toUpperCase().split('').forEach(i => {
//     !!data[i] ? data[i] = data[i] + 1 : data[i] = 1;
// })
// require("fs").readFileSync('/dev/stdin').toString().trim().toUpperCase().split('\n')[0].split('').forEach(i => {!!data[i] ? data[i] = data[i] + 1 : data[i] = 1});

Object.entries(data).find(item => item[1] === Math.max(...Object.values(data)))[0] === Object.entries(data).findLast(item => item[1] === Math.max(...Object.values(data)))[0] ? console.log(Object.entries(data).find(item => item[1] === Math.max(...Object.values(data)))[0]) : console.log('?');



