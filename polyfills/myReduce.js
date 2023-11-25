let arr = [2, 3, 4, 5, 6, 1];

let res = arr.reduce((previousValue, currentValue) => previousValue + currentValue);

console.log(res);

Array.prototype.myReduce = function(callback) {
    let ans = 0;
    for(let i=0; i<this.length; i++) {
        ans = callback(ans, this[i]);
    }
    return ans;
}

console.log(arr.myReduce((previousValue, currentValue) => previousValue + currentValue));
