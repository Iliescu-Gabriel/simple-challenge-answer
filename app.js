const errorMsg = document.querySelector(".container-modal-content--error");
const successMsg = document.querySelector(".container-modal-content--success");
const userName = document.querySelector('input[name="userName"]');
const userPassWord = document.querySelector('input[name="userPassword"]');
const loginForm = document.getElementById("form");
const modal = document.querySelector(".container-msg-modal");
const modalContent = document.querySelectorAll(".container-modal-content");

console.log("Great! You can debug it!");

const myLogin = {
  userName: "admin",
  password: "WW91Q3JhY2tlZEl0",
};

window.onload = init();

function init() {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    userLogin();
  });
}

/**
 * TODO: We need to connect the frontend with the backend!
 * Do a POST request to the /auth/login endpoint with the following Payload
 * {
 *     "username": "username",
 *     "password": "DECODED password"
 * }
 */

/* Solutiuon */
// password: YouCrackedIt
async function loginRequest(user, password) {
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: user,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
/**************/

function userLogin() {
  const nameVal = userName.value;
  passwordVal = btoa(userPassWord.value);
  console.log(atob(myLogin.password));

  const isLogin = true;
  if (nameVal === myLogin.userName && passwordVal === myLogin.password) {
    loginCheck(isLogin);
  } else {
    loginCheck(!isLogin);
  }
  /* Solutiuon */
  loginRequest(userName.value, userPassWord.value);
  /**************/
}

function loginCheck(isLogin) {
  modal.classList.add("enabled");

  if (isLogin) {
    successMsg.classList.add("enabled");
  } else {
    errorMsg.classList.add("enabled");
  }

  setTimeout(function () {
    modal.classList.remove("enabled");
    loginForm.reset();
    modalContent.forEach(function (content) {
      content.classList.remove("enabled");
    });
  }, 3000);
}
