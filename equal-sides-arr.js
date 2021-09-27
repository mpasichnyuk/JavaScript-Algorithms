function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        console.log(`Position  ${i}`);
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        console.log(`leftsum is  ${leftSum}`);
        //and go from i to end
        let rightSum = 0;
        for (k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }
        console.log(`rightsum is  ${rightSum}`);
        if (rightSum === leftSum) return i;
    }
    return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
