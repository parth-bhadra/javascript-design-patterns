// Array.prototype.map = null;

let arr = [3,15,6];

console.log(arr.map((val) => ({id: val*2})));

Array.prototype.myMap = function(callback) {
    let arr = new Array();
    for(let i=0; i<this.length; i++) {
        arr.push(callback(this[i]));
    }
    return arr;
}

console.log(arr.myMap((val) => ({id: val*2})));