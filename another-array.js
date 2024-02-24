// Square, sum , average in a single arrow function
const nums = [1, 2, 3, 4, 5];
const math = arr => {
    let newSquareArr = [];
    for (let num of arr) {
        const Square = num**2;
        newSquareArr.push(Square);
    }
    let total = 0;
    for (let num of newSquareArr) {
        total += num;
    }
    const avg = total/ newSquareArr.length;
    return avg;
}
console.log(math(nums));
