function solution(arr) {
    var answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer = answer + arr[i];
    }
    var answer = answer / arr.length;
    console.log(answer);
}
let arr = [1, 2, 3, 4];
solution(arr);
