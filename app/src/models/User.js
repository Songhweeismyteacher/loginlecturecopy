"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    } 

    login() {
        const body = this.body;
        const { id, psword } = UserStorage.getUserInfo(body.id);

        if (id) {
            if (id === body. id && psword === body.psword) {
                return { success : true } ;
            }
            return { success : false, msg: "비밀번호가 틀렸습니다."};        // 아이디가 서버에 있는지 확인하고 패스워드가 같으면 true 없으면 false, 메시지 출력
        }
        return { success : false, msg: "존재하지 않는 아이디 입니다."};
    }
}
    module.exports = User;