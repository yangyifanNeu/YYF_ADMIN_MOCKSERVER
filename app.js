const getDynamicData = require("./mockData/chart/dynamicData.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const menuData = require("./mockData/menuData.json");
const gridData = require("./mockData/grid/gridData.json");
const gridStructure = require("./mockData/grid/gridStructure.json");
const expressWs = require('express-ws');
expressWs(app);
//设置允许跨域访问该服务.
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get("/getMenuData", (_req, res) => {
  res.json(menuData);
});
app.get("/getGridData", (_req, res) => {
  res.json(gridData);
});
app.get("/getGridStructure", (_req, res) => {
  res.json(gridStructure);
});
app.post("/downloadImg", (_req, res) => {
  var body = _req.body;
  res.send("aaaa");
});
app.ws('/socketTest', function (ws, req){
  if(ws.readyState == ws.OPEN){
    ws.send(JSON.stringify(getDynamicData()));
  }
  var sockedInterval = setInterval(()=>{
    if(ws.readyState !== ws.OPEN){
      clearInterval(sockedInterval);
    }else{
      ws.send(JSON.stringify(getDynamicData()));
    }
  },4000);
  
  ws.on('message', function (msg) {
      // 业务代码
      console.log("hahahah");
  })
})
app.listen(3000, () => console.log("Example app listening on port 3000!"));
