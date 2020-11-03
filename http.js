let http = require('http');
let fs = require('fs');
// 服务器访问1.html页面，返回页面内容
http.createServer((request,response) => {
    // console.log(request.url)

    fs.readFile(`./${request.url}`, (err,data) => {
        if (err) {
            response.writeHead(404);
            response.end('404 not found');
        } else {
            response.end(data);
        }
    })
}).listen(8080);


// http.createServer((request,response) => {
//     // request 请求，传参
//     // response 返回的数据
//     response.end('hello world'); 
// }).listen(8080);