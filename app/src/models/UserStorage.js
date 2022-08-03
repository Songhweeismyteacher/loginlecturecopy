"use strict"

class UserStorage {
    static #users = {                            // class 안에 선언할 때 const 같은 선언자? 필요없음 class -> 객체를 생성하기 위한 템플릿, #앞에 써주면 외부에서 불러올 수 없음
        id: ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    static getusers(...fields) {                                 //class 자체에서 메서드에접근 하려면 static을 붙여줘야 함. 
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});   
        return newUsers;                                                   //이부분 하나도 알겠음 20강 돌려서 보기
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userkeys = Object.keys(users);
        const userInfo = userkeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage; 