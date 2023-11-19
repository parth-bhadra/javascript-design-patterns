// "use strict";

let cap = {
    name: "I am captain america",
    getNameArrow: () => {
        console.log(this);
        // return this.name;
    },

    getNameNormal() {
        console.log(this);
        function inner() {
            console.log(this);
        }
        inner();
        // return this.name;
    }
}

// this.name = "I am global this";
// console.log(cap.getNameArrow());
cap.getNameNormal();
console.log(this);