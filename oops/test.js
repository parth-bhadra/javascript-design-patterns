function fn() {
    let num = 0;
    function innerFn(t) {
        // should return a function
        
        if(t == 0) {
            return num;
        } else {
            num++;
            return innerFn;
        }
    }


    return innerFn();
    
}

console.log(fn()()()()()(0)); // return a fn

