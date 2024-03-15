//add your js code here
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userInfo"));

    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      // Redirect to index.html upon successful login
      window.location.href = "index.html";
    } else {
      // Display error message or handle invalid login
      alert("Invalid email or password. Please try again.");
    }
  });
});
