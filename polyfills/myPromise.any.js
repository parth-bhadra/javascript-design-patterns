async function handler() {
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

  let c = 10;

  // console.log(await Promise.any([a, b, c]));

  Promise.myAny = function (promises) {
    let arr = new Array();

    return new Promise(async (resolve, reject) => {
      try {
        // for (let i = 0; i < promises.length; i++) {
        //   arr.push(promises[i]);
        // }
        // struggling with the problem statement, it is realized that this method needs to execute promises on a different thread
        promises.forEach(async (element) => {
          arr.push(element);
        });

        resolve(arr[0]);
      } catch (error) {
        reject(error);
      }
    });
  };

  console.log("Output ", await Promise.myAny([a, b, c]));
}

handler();
