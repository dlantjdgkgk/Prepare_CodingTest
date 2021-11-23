function solution(a, b) {
    var answer = '';
    let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(`2016,${a},${b}`);
    answer = day[date.getDay()];
    console.log(answer);
}

let a = 5;
let b = 24;
solution(a, b);

// Date() 함수로 호출할 경우 new Date().toString()과 동일하게 현재 날짜와 시간을 나타내는 문자열을 반환합니다.
// new Date() 생성자로 호출할 경우 새로운 Date 객체를 반환합니다.
//Date.prototype.getDay()
// Date에서 현지 시간 기준 요일(0–6)을 반환합니다.
