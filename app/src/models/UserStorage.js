"use strict";

const db = require("../config/db");  // 상위폴더 -> config -> db

class UserStorage {
    static getUserInfo(id) { 
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => { //보안상의 이유로 이렇게 함 대괄호 안의 id가 ? 안에 들어감
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });    
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(query, 
                [userInfo.id, userInfo.name, userInfo.psword], 
                (err) => { //보안상의 이유로 이렇게 함 대괄호 안의 id가 ? 안에 들어감
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });   
    }
}
module.exports = UserStorage;