"use strict";

const id = document.querySelector("#id"),  // 선택자(html 관련)
    name = document.querySelector("#name"),
    confirmPsword = document.querySelector("#confirm-psword"),
    psword = document.querySelector("#psword"), // 선택자(html 관련)
    registerBtn = document.querySelector("#button"); // button은 하나여서 #안넣음   // 자바스크립트 사용할 때 공백은 대문자로 구별, html은 -으로 구별

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,      //  버튼을 클릭하면 로그인과 패스워드창에 입력한 값을 받음
        confirmPsword: confirmPsword.value,
    };


    fetch("/register", {
        method: "POST",
        headers: {
            "content-type": "application/json",   //json형식이라고 알려줌
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            }   else   {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");  // 에러난 것을 알려줌 (비밀번호가 틀려서가아니라 코드에서 문제 생겼을 때를 말하는 것 같음 잘 모름)
        });
}
