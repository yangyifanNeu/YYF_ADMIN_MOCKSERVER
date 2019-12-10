const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const menuData = require("./mockData/menuData.json");
const gridData = require("./mockData/grid/gridData.json");
const gridStructure = require("./mockData/grid/gridStructure.json");
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

app.listen(3000, () => console.log("Example app listening on port 3000!"));
