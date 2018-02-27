const signupButton = document.querySelector('#signupButton');
signupButton.addEventListener('click', displaySignup);
signupButton.addEventListener('touchstart', displaySignup);

const signupClose = document.querySelector('#signupClose');
signupClose.addEventListener('click', hideSignup);
signupClose.addEventListener('touchstart', hideSignup);

const loginButton = document.querySelector('#loginButton');
loginButton.addEventListener('click', displayLogin);
loginButton.addEventListener('touchstart', displayLogin);

const loginClose = document.querySelector('#loginClose');
loginClose.addEventListener('click', hideLogin);
loginClose.addEventListener('touchstart', hideLogin);


function displaySignup() {
  document.querySelector('#signup').style.display = "block";
}

function hideSignup() {
  document.querySelector('#signup').style.display = "none";
}

function displayLogin() {
  document.querySelector('#login').style.display = "block";
}

function hideLogin() {
  document.querySelector('#login').style.display = "none";
}
