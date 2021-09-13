// задача - найти сумму всех чисел которые делятся на 3 или на 5. числа берем в диазпаное от 0 до N, в случае отрицательных чисел вывести ответ 0.

function solution(number) {
    if (number <= 0) return 0;

    let sum = 0;
    for (i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(solution(10)); // 23
