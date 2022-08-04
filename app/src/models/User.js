"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    } 

    login() {
        const client = this.body;
        const { id, psword } = UserStorage.getUserInfo(client.id);

        if (id) {
            if (id === client.id && psword === client.psword) {
                return { success : true } ;
            }
            return { success : false, msg: "비밀번호가 틀렸습니다."};        // 아이디가 서버에 있는지 확인하고 패스워드가 같으면 true 없으면 false, 메시지 출력
        }
        return { success : false, msg: "존재하지 않는 아이디 입니다."};
    }

    resgister() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}
    module.exports = User;