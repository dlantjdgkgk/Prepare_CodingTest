function solution(phone_number) {
    let answer = '';
    let len = phone_number.length;
    for (let i = 0; i < len; i++) {
        if (i < len - 4) {
            answer = answer + '*';
        } else {
            answer = answer + phone_number[i];
        }
    }
    console.log(answer);
}
let phone_number = '01033334444';
solution(phone_number);
