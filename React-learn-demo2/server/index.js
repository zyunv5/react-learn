const express = require("express");
const bodyParser = require("body-parser");

const users = require("./routes/users");

let app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});
//验证第一步 创建路由
app.use("/api/users", users);

app.listen(6060, () => {
  console.log("6060");
});
