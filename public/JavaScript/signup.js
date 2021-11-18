// const { sign } = require("cookie-signature");

async function signupForm(event) {
  event.preventDefault();
  console.log("hello")
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("success")
      console.log("success");
      document.location.replace("/login");
    } else {
      alert(response.statusText);
    }
  }
}

function goBack() {
  document.location.replace("/");
}

document.querySelector(".signUpBtn").addEventListener("click", signupForm);
// document.querySelector("#cancel").addEventListener("click", goBack);



// async function signupForm (event) {
 
//   event.preventDefault();

// const username = document.querySelector('#username-signup').value.trim();
// const email = document.querySelector('#email-signup').value.trim();
// const password = document.querySelector('#password-signup').value.trim();

// if (username && email && password) {
//   const response = await fetch('/api/users', {
//     method: 'post',
//     body: JSON.stringify({
//       username,
//       email,
//       password
//     }),
//     headers: { 'Content-Type': 'application/json' }
//   });

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }
// }
// };
// document.querySelector('.signup-form').addEventListener('submit', signupForm);