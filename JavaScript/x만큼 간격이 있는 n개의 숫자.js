function solution() {
    let x = 4;
    let n = 3;
    var answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = x * (i + 1);
    }
    console.log(answer);
}

solution();
