const input =`<problem>17413<is hardest>problem ever<end>`;

// const input = require("fs").readFileSync('/dev/stdin').toString().trim();

const foo = input.split('<');

let result = '';

if (foo.length === 1) result += foo[0].split(' ').map(item=>item.split('').reverse().join('')).join(' ');
else{
    const bar = foo.map(item => item.split('>'))
    console.log(bar);
    const first = bar.shift()[0]
    if(first !== '') result += first.split(' ').map(item=>item.split('').reverse().join('')).join(' ');
    for(let i of bar ){
        result += '<' + i[0] + '>';
        result += i[1] ? i[1].split(' ').map(item=>item.split('').reverse().join('')).join(' ') : '';
    }
}

console.log(result);