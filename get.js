let http = require('http');
let url = require('url');

// req 接受发送的数据
http.createServer((req,res) => {
    console.log(req.url);
    // url模块可以处理接受的数据
    let {pathname, query} = url.parse(req.url, true)
    console.log(query);
}).listen(8888);