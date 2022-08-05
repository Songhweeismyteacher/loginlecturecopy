const mysql = require("mysql");

const db = mysql.createConnection({                                     //데이터 베이스 설정들 기록, 대소문자 주의
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWORD,
    database: process.env.DB_DATABASE,
});

db.connect();

module.exports = db;  // 환경 변수 설정  //.env파일에 환경 변수 저장해 놨음 
