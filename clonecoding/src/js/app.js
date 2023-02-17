const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function loginSubmit(info) {
    info.preventDefault();
    const username = loginInput.value;
    console.log(info);
}

loginForm.addEventListener("click", loginSubmit)  