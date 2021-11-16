function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Math.sqrt(i) % 1 === 0) answer -= i;
        else answer += i;
    }
    return answer;
}
let left = 13;
let right = 17;
console.log(solution(left, right));

//Math.sqrt 함수는 제곱근이 정수일때를 의미한다. ex) 16의 제곱근은 +- 4 이다.
