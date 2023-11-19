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

    getName = () => {
        return this.nameP;
    }

    getName = (n) => {
        return n;
    }
}

// let p1 = new Parent("Father1", 30);
// console.log(p1);

let p2 = new Parent("Father2");
console.log(p2);
p2.getName("hello");

class Child extends Parent { // inheritance
    constructor(name) {
        super("Father");
        this.name = name;
    }
}

let c = new Child("Son");
console.log(c);

// this was inheritance using class

