function solution(array, commands) {
    let result = [];
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        answer = array.slice(commands[i][0] - 1, commands[i][1]);
        answer = answer.sort((a, b) => a - b);
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

// Array.prototype.slice()  arr.slice([begin[,end]])
// slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
