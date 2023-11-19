class Parent {
    constructor(nameP) {
        this.nameP = nameP;
    }
}

let p = new Parent("Father");
console.log(p);

class Child extends Parent {
    constructor(name) {
        super("Father");
        this.name = name;
    }
}

let c = new Child("Son");

console.log(c);

