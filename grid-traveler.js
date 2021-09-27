// учебная задача, посчитать количество путей из точки (0,0) в точку (m,n) в двумерной матрице m на n размеров.
// сначала я использовал брутфорс с рекурсией, потом добавил мемоизацию.

const gridTraveler = (m, n, memo = {}) => {
    const key = m + `,` + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
};

let m = 18;
let n = 18;

console.log(`the grid travel for ${m} and ${n} is ${gridTraveler(m, n)}`);
