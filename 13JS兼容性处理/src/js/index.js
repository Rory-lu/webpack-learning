// import '@babel/polyfill';

const add = (x, y) => {
  return x + y;
}

console.log(add(1, 2));

const promise = new Promise((resovle) => {
  setTimeout(() => {
    console.log('定时器执行完了');
    resovle();
  }, 1000)
})

console.log(promise);
