async function handler() {
    let a = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("API took 1 seconds");
            resolve("1");
        }, 1000);
    })

    let b = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("API took 2 seconds");
            resolve("2");
        }, 2000);
    })

    let c = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("API took 3 seconds");
            resolve("fail");
        }, 3000);
    })
    
    // console.log(await Promise.all([a, b, c]));

    Promise.myAll = async function(promises) {
        return new Promise(async (resolve, reject) => {
            try {
                let arr = new Array();
                for(let i=0; i<promises.length; i++) {
                    arr.push(await promises[i]);
                }
                resolve(arr);
            } catch (error) {
                reject(error);
            }
            
        })
    }

    console.log(await Promise.myAll([a, b, c]));
    console.log(Promise.myAll([a, b, c]));


}

handler();



