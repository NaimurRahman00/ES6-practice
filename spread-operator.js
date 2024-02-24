const someNums = [1, 12, 23, 34, 45, 56];
const someNums2 = [98, 87, 76, 65, 54, 43];

const max = (arr1, arr2) => {
    const bigArray = [...arr1, ...arr2];
    const maxNum = Math.max(...bigArray);
    const minNum = Math.min(...bigArray);
    console.log('Max: ',maxNum, 'and min: ', minNum);
}

max(someNums, someNums2);