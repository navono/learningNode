function wait(ms) {
  return new Promise(resolve => setTimeout(_ => resolve(), ms));
}


async function test() {
  // await 是配合 Promise使用的。 await 一个非Promise对象不会
  // 做任何事
  // await new Promise((resolve, reject) => {
  //   setTimeout(_ => {
  //     resolve();
  //   }, 2000);
  // });

  // await 5;

  // This object is a "thenable". It's a promise by the letter of the law,
  // but not the spirit of the law.
  // await { then: resolve => setTimeout(_ => resolve(), 2000) };

  // 还有最重要的一点是，await 只能对 async 函数进行调用；
  // await 也不能放在闭包里

  console.log('Hello');
}

async function waitFor() {
  for (let i = 0; i < 10; ++i) {
    await wait(1000);

    console.log('Hello');
  }
}

waitFor();