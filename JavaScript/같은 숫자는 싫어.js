function solution3() {
    let answer = [];
    const arr = [1, 1, 3, 3, 0, 1, 1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i]);
        }
    }
    console.log(answer);
}

solution3();
