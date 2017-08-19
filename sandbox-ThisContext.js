const vm = require('vm');

global.count1 = 100;
var count2 = 100;

const txt = `
  if(count1 === undefined) {
    count1 = 0;
  } else {
    count1++;
  }
  // count2 无法被访问，因此为 undefined
  if(count2 === undefined) {
    // 此处使用 var 声明，会将 count2 加入到 global 中
    // 但是外面的本地变量 count2 并不会受影响
    // var count2 = 0;
    count2 = 0;
  } else {
    count2++;
  }
  console.log(count1);
  console.log(count2);
  // console.log(global);
`;

const script = new vm.Script(txt);

// 使用 try-catch 会防止运行在 vm 中的代码的错误传播到
// 上层。
try {
  script.runInThisContext({filename: 'count.vm'});  
} catch (error) {
  console.log(error.stack);
}

console.log(count1);
console.log(count2);