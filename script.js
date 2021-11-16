// 1번 평균 구하기
// const arr = [1, 2, 3, 4];

// function solution(arr) {
//     var answer = 0;
//     for (let i = 0; i < arr.length; i++) {
//         answer = answer + arr[i];
//     }
//     var answer = answer / arr.length;
//     console.log(answer);
// }

// solution(arr);

// 2번 문제 배열 문제

// function solution2() {
//     const N = 5;
//     const result = [];
//     const numbers = [1, 3, 7, 9, 5];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > N) result[i] = 0;
//         else result[i] = 1;
//     }
//     console.log(result);
// }

// solution2();

//3번 문제 같은 숫자는 싫어

// function solution3() {
//     let answer = [];
//     const arr = [1, 1, 3, 3, 0, 1, 1];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1]) {
//             answer.push(arr[i]);
//         }
//     }
//     console.log(answer);
// }

// solution3();

// 4번 문제 x만큼 간격이 있는 n개의 숫자

// function solution() {
//     let x = 4;
//     let n = 3;
//     var answer = [];
//     for (let i = 0; i < n; i++) {
//         answer[i] = x * (i + 1);
//     }
//     console.log(answer);
// }

// solution();

// 5번 문제 핸드폰 번호 가리기

// function solution(phone_number) {
//     let answer = '';
//     let len = phone_number.length;
//     for (let i = 0; i < len; i++) {
//         if (i < len - 4) {
//             answer = answer + '*';
//         } else {
//             answer = answer + phone_number[i];
//         }
//     }
//     console.log(answer);
// }
// let phone_number = '01033334444';
// solution(phone_number);

// 6번 문제 하샤드 수

// function solution(x) {
//     let sum = 0;
//     let arr = String(x).split(''); // [1,9]

//     for (let i = 0; i < arr.length; i++) {
//         sum += Number(arr[i]); // 1+8
//     }
//     return x % sum == 0 ? true : false;
// }
// let x = 19;
// console.log(solution(x));

// 7번 콜라츠 추측

// function solution(num) {
//     let result = 0;
//     while (num != 1) {
//         if (num % 2 == 0) {
//             num = num / 2;
//         } else num = num * 3 + 1;
//         result += 1;
//     }
//     if (result >= 500) result = -1;
//     console.log(result);
// }
// let num = 15;
// solution(num);

// 8번 최대공약수와 최소공배수

// function solution(n, m) {
//     let answers = [];
//     if (m % n == 0) {
//         answers[0] = n;
//         answers[1] = (m * n) / n;
//     } else {
//         answers[0] = 1;
//         answers[1] = (m * n) / 1;
//     }
//     console.log(answers);
// }
// let n = 5;
// let m = 13;
// solution(n, m);

// 9번 제일 작은 수 제거하기

// function solution(arr) {
//     if (arr.length <= 1) return [-1];
//     let min;
//     arr.reduce((acc, cur) => (min = cur > acc ? acc : cur));
//     return arr.filter((e) => e !== min);
// }

// console.log(solution([4, 3, 2, 1]));
// console.log(solution([10]));

// 10번 약수의 개수와 덧셈

// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Math.sqrt(i) % 1 === 0) answer -= i;
//         else answer += i;
//     }
//     return answer;
// }
// let left = 13;
// let right = 17;
// console.log(solution(left, right));

// 11번 두개 뽑아서 더하기
function solution(numbers) {
    let result = [];
    return result;
}
let numbers = [2, 1, 3, 4, 1];
