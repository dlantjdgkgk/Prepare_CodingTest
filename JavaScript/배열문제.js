function solution2() {
    const N = 5;
    const result = [];
    const numbers = [1, 3, 7, 9, 5];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > N) result[i] = 0;
        else result[i] = 1;
    }
    console.log(result);
}

solution2();
