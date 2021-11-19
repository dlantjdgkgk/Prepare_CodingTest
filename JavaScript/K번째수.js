function solution(array, commands) {
    let result = [];
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        answer = array.slice(commands[i][0] - 1, commands[i][1]);
        answer = answer.sort();
        result[i] = answer[commands[i][2] - 1];
    }
    return result;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
];
console.log(solution(array, commands));
