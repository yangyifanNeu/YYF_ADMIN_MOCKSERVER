const express = require('express')
const app = express()
const menuData = require("./mockData/menuData.json")
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });
app.get('/getMenuData', (_req, res) => {
    res.json(menuData);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))