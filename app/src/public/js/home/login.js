"use strict";

const id = document.querySelector("#id"), // 선택자(html 관련)
    psword = document.querySelector("#psword"), // 선택자(html 관련)
    loginBtn = document.querySelector("button"); // button은 하나여서 #안넣음

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
       psword: psword.value,      //  버튼을 클릭하면 로그인과 패스워드창에 입력한 값을 받음
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",   //json형식이라고 알려줌
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => console.log(res));
}