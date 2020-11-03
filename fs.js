const mod1 = require('./mod');
// ./ 代表的是当前模块下的mod文件，如果不要./，那就会去node_modules依赖文件夹下去找对应文件
console.log(mod1.a);
console.log(mod1.b);
console.log(mod1.c);


// let fs = require("fs");

// let data = fs.writeFileSync('b.txt', '每天五次');
// console.log(data);




// 写入信息，同步方法
// let data = fs.readFileSync('a.txt')
// console.log(data.toString());


// 写入信息，异步方法
// fs.writeFile('b.txt','每天一次',{flag: 'a'}, err => {
//     if (err) {
//         throw err;
//     } 
// })

// 读取信息，异步方法
// fs.readFile('./a.txt', (err,data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         // data返回的是10进制数据，所以要转换
//         console.log(data.toString());
//     }
// });



