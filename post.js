let http = require('http');
let querystring = require('querystring'); // 针对于post进行数据处理

// post请求是分段进行传输数据
// req.on('data') 是进行分段传输
// req.on('end') 是数据传输结束
// buffer是二进制数据格式
http.createServer((req,res) => {
    let result = [];
    req.on('data', buffer => {
        result.push(buffer);
    })
    req.on('end', () => { // 数据结束传输
        let data = Buffer.concat(result).toString();
        console.log(querystring.parse(data));
    })
}).listen(8888);