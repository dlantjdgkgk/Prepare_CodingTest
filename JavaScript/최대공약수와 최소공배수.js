function solution(n, m) {
    let answers = [];
    if (m % n == 0) {
        answers[0] = n;
        answers[1] = (m * n) / n;
    } else {
        answers[0] = 1;
        answers[1] = (m * n) / 1;
    }
    console.log(answers);
}
let n = 5;
let m = 13;
solution(n, m);
