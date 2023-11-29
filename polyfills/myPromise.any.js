Promise.myAny = async function (promises) {
  return new Promise(async (resolve, reject) => {
    // promises.forEach(async promise => {
    //   // everything inside of a for each is async task and is non blocking
    //   resolve(await Promise.resolve(promise));
    // });

    // implementation with for loop
    // async at the top is only for the for loop below
    // for (let i = 0; i < promises.length; i++) {
    //   // everything inside of a for loop is a sync task and is blocking
    //   resolve(await Promise.resolve(promises[i]));
    // }

    // implementation with for loop
    for (let i = 0; i < promises.length; i++) {
      // everything inside of a for loop is a sync task and is blocking
      // modifying the for loop to make it behave asynchronously
      setTimeout(async () => {
        resolve(await Promise.resolve(promises[i]));
      }, 0);
    }
  });
};

let a = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("inside api 1");
    resolve("api 1 success");
    //   reject("api 1 fail");
  }, 3000);
});

let b = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("inside api 2");
    resolve("api 2 success");
    // reject("api 2 fail");
  }, 5000);
});

console.log(await Promise.myAny([b, a, 10]));
