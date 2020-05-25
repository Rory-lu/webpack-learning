/**
 * index.js: webpack 入口起点文件
 */
// 引入json 文件
import data from './data.json';

// 引入css文件
import './index.css';


function add(x, y) {
  return x + y;
}

console.log(add(1, 2));
console.log(data);
