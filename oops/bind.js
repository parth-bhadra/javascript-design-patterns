let cap = {
    name: "I am captain america",
    getNameArrow: () => {
        return this.name;
    },

    getNameNormal() {
        return this.name;
    }
}

let ironMan = {
    name: "I am iron man"
}

let testFn = cap.getNameArrow.bind(ironMan);
console.log(testFn());
// you can again see that this can't be rebinded incase of an arrow function

let testFn2 = cap.getNameNormal.bind(ironMan);
console.log(testFn2());