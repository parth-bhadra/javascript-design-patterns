class Parent {
    // constructor overloading is not allowed
    // because in js
    // a class is a syntactic sugar over function
    // constructor(nameP, age) {
    //     this.nameP = nameP;
    //     this.age = age; // encapsulation
    // }
    constructor(nameP) {
        this.nameP = nameP;
    }

    // getName = () => {
    //     return this.nameP;
    // }

    // getName = (n) => { // function overloading
    //     return n;
    // }

    getSomething = () => { // when you write functions like these, they are treated as attributes and a new copy is created each time an object is created
        console.log("testing");
    }
}

Parent.prototype.getName = () => {
    // arrow function's this is not bound to anything
    // to use this meaningfully convert this to normal function
    console.log(this);
    return this.nameP;
}

let p1 = new Parent("Father1");
// Parent.prototype.getName.bind(p1); // this does not change the value of this, so if you want to use the value of this meaningfully, use normal function
// console.log(p1);

let p2 = new Parent("Father1");
// console.log(p2);
// p2.getName("hello");

console.log(p1.nameP == p2.nameP);
console.log(p1.getName == p2.getName); // this happens because javascript creates new copies of functions for each object

class Child extends Parent { // inheritance
    constructor(name) {
        super("Father");
        this.name = name;
    }
}

let c = new Child("Son");
// console.log(c);

// this was inheritance using class

