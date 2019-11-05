

var defaultParams = {
    root: 'judge_html',
    port: 4507, // 服务开启端口号
    proxyTable: {
        url: '/statistic',
        proxy: {
            target: 'http://yq01-yq01-sc-dev.epc.baidu.com:8880',
            changeOrigin: true
            // pathRewrite: {
            //     '^/api': ''
            // }
        }
    }
}

var express = require('express')
var proxy = require('http-proxy-middleware')
var path = require('path')


var app = express()
app.use(express.static(path.join(__dirname, defaultParams.root)))
// 开启代理
app.use(defaultParams.proxyTable.url, proxy(defaultParams.proxyTable.proxy))

app.use(function (req, res, next) {
    /* var err = new Error('哎呀呀，找不到呀~~~');
  err.status = 404; */
    res.redirect('/404.html')
    // next(err);
})

app.listen(defaultParams.port, function () {
    console.log('启动了一个服务,开启了端口：' + defaultParams.port);
});