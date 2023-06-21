function solution(cards1, cards2, goal) {
    const loop = [...goal];
    for (let i of loop) {
        if (goal[0] === cards1[0]) {
            goal.shift(); cards1.shift();
            continue;
        }
        else if (goal[0] === cards2[0]) {
            goal.shift(); cards2.shift();
            continue;
        }
        else {
            return "No";
        }
    }
    if (goal.length > 0) return "No";
    else return "Yes";
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));  