const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
let user = {
    admin: 123456
}

http.createServer((req, res) => {
    let path,get,post;
    // 数据请求方式
    if (req.method == 'GET') {
        let {pathname,query} = url.parse(req.url,true);
        path = pathname;
        get = query;
        complete();
    } else if (req.method == 'POST') {
        let arr = [];
        path = req.url;
        req.on('data', buffer => {
            arr.push(buffer);
        })
        req.on('end', () => {
            // arr.toString()  字符串才能用，如果传的数据是文件或者图片等其他的，不支持。
            post = querystring.parse(Buffer.concat(arr).toString());
            complete();
        })
    }

    function complete() {
        if (path == '/login') { // 登录接口
            res.writeHead(200, { // 设置头部信息
                "Content-Type": "text/plain;charset=utf-8"
            })
            let {username,password} = get;
            // 用注册的名称和数据库去比较
            if (!user[username]) {
                res.end(JSON.stringify({
                    status: 1,
                    msg: '用户名不存在'
                }))
            } else if (user[username] != password) {
                res.end(JSON.stringify({
                    status: 1,
                    msg: '密码错误'
                }))
            } else {
                res.end(JSON.stringify({
                    status: 200,
                    msg: '登录成功'
                }))
            }
        } else if (path == '/reg') { // 注册接口
            res.writeHead(200, {
                "Content-Type": "text/plain;charset=utf-8"
            })
            let {username,password} = post;
            if (user[username]) {
                res.end(JSON.stringify({
                    status: 1,
                    msg: '账号已经存在'
                }))
            } else {
                user[username] = password;
                res.end(JSON.stringify({
                    status: 200,
                    msg: '注册成功'
                }))
            }
        } else { // 其他
            fs.readFile(`www${path}`, (err, data) => {
                if (err) {
                    res.end('404')
                } else {
                    res.end(data)
                }
            })
        }
    }
}).listen(8080)