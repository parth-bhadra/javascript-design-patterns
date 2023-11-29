Promise.myAny = async function (promises) {
  return new Promise((resolve, reject) => {
    let cnt = 0;
    let errors = [];
    for (let i = 0; i < promises.length; i++) {
      setTimeout(async () => {
        try {
          resolve(await Promise.resolve(promises[i]));
        } catch (error) {
          cnt++;
          errors.push(error);

          if (cnt == promises.length) {
            // console.log("inside catch block, rejecting now...");
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        }
      }, 0);
    }
  });
};

let a = new Promise((resolve, reject) => {
  // setTimeout(resolve, 1000, "api 1 success");
  setTimeout(reject, 1000, "api 1 fail");
});
let b = new Promise((resolve, reject) => {
  // setTimeout(resolve, 1000, "api 2 success");
  setTimeout(reject, 1000, "api 1 fail");
});

async function handler() {
  try {
    console.log(await Promise.myAny([b, a]));
    // console.log(await Promise.any([b, a]));
  } catch (error) {
    throw error;
  }
}

handler();
