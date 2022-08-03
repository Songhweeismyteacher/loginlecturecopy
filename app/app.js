"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static("src/public"));;  //${__dirname}--> app.js가 있는 경로 /src/public  이라는 정적 경로를 설정해줌.app.use(express.static(src/public));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

module.exports = app; 

