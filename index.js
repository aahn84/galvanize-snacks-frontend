document.querySelector('#signupButton').addEventListener('click', displaySignup);
document.querySelector('#signupButton').addEventListener('touchstart', displaySignup);

document.querySelector('#loginButton').addEventListener('click', displaySignup);
document.querySelector('#loginButton').addEventListener('touchstart', displaySignup);


function displaySignup() {
  document.querySelector('#signup').style.display = "block";
}

function displayLogin() {
  document.querySelector('#login').style.display = "block";
}
