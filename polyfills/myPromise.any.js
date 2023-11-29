Promise.myAny = async function (promises) {
  return new Promise((resolve, reject) => {
    let cnt = 0;
    let errors = [];
    for (let i = 0; i < promises.length; i++) {
      // a simpler implementation using then and catch block
      // it saves you the implementation of ty catch
      Promise.resolve(promises[i])
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          cnt++;
          errors.push(e);
          if (cnt === promises.length)
            reject(new AggregateError(errors, "All promises were rejected"));
        });
    }
  });
};

let a = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "api 1 success");
  // setTimeout(reject, 1000, "api 1 fail");
});
let b = new Promise((resolve, reject) => {
  setTimeout(resolve, 900, "api 2 success");
  // setTimeout(reject, 1000, "api 1 fail");
});

async function handler() {
  try {
    console.log(await Promise.myAny([b, a]));
    // console.log(await Promise.any([b, a]));
  } catch (error) {
    throw error;
  }

  // console.log(await Promise.myAny([b, a, 10]));
}

handler();
