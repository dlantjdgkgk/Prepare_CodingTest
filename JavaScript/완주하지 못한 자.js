function solution(participant, completion) {
    participant.sort(); //참가자 배열 정렬
    completion.sort(); //완주자 배열 정렬
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            //인덱스 0부터 순차적으로 두 배열 비교
            return participant[i];
            //비완주자가 참가자 배열에 나올 경우 출력
        }
    }
}

let participant = ['mislav', 'stanko', 'mislav', 'ana'];
let completion = ['stanko', 'ana', 'mislav'];
console.log(solution(participant, completion));

// Array.prototype.sort()
// sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
// 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months); ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1); [1, 100000, 21, 30, 4]
