// 방법 1 indexOf 사용
function solution2(number) {
    let answer = [];
    for (let i = 0; i < number.length - 1; i++) {
        for (let j = i + 1; j < number.length; j++) {
            let sum = number[i] + number[j];
            if (answer.indexOf(sum) === -1) {
                answer.push(sum);
            }
        }
    }
    answer.sort(function (a, b) {
        return a - b;
    });
    return answer;
}

let number = [2, 1, 3, 4, 1];
console.log(solution(number));

// 방법 1 find 사용 => find 사용할때는 0이 false 이기 때문에 0을 반복해서 출력하지 않기 위해서
// != undefined 조건을 걸어 놓는다.
function solution(numbers) {
    let answer = [];
    let sum = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sum = numbers[i] + numbers[j];
            if (answer.find((item) => item === sum) != undefined) continue;
            answer.push(sum);
        }
    }
    answer.sort((a, b) => {
        return a - b;
    });
    return answer;
}
let numbers = [0, 0, 0, 2, 1, 3, 4, 1];
console.log(solution(numbers));

// indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
// arr.indexOf(searchElement[, fromIndex])
// indexOf 메서드를 이용해 answer 배열에 내가 구한 합이 없다면 그 수를 담았다.

// let array = [2, 7, 9];
// console.log(array.indexOf(2)); // 0
// console.log(array.indexOf(7)); // 1
// console.log(array.indexOf(7, 2)); // -1
// console.log(array.indexOf(2, 1)); // -1
// console.log(array.indexOf(2, -3)); // 0

// 오름차순으로 배열을 담는 방법은 [정렬하려는 배열].sort(function(a,b) {return a-b;}) 라고 한다.
// 화살표 함수를 사용하여 answer.sort ((a,b) => a-b) 작성하여도 좋다.
