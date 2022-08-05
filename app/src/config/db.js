const mysql = require("mysql");

const db = mysql.createConnection({                                     //데이터 베이스 설정들 기록, 대소문자 주의
    host: "selalogin.clxyk7thrtmd.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "wjdgns0204",
    database: "login_",
});

db.connect();

module.exports = db;