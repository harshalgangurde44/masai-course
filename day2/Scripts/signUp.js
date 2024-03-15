//add your js code here
document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.getElementById("signUpForm");

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    const newUser = {
      fullname: fullname,
      email: email,
      phone: phone,
      password: password,
    };

    // Store user data in localStorage
    localStorage.setItem("userInfo", JSON.stringify(newUser));

    // Redirect to index.html
    window.location.href = "index.html";
  });
});
