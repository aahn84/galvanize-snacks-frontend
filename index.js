const navHome = document.querySelector('#navHome');
navHome.addEventListener('click', loadHomepage);
navHome.addEventListener('touchstart', loadHomepage);

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

const loginFromRegister = document.querySelector('#loginFromRegister');
loginFromRegister.addEventListener('click', displayLogin);
loginFromRegister.addEventListener('touchstart', displayLogin);

const registerFromLogin = document.querySelector('#registerFromLogin');
registerFromLogin.addEventListener('click', displaySignup);
registerFromLogin.addEventListener('touchstart', displaySignup);

const cancelLogin = document.querySelector('#cancelLogin');
cancelLogin.addEventListener('click', hideLogin);
cancelLogin.addEventListener('touchstart', hideLogin);

const cancelSignup = document.querySelector('#cancelSignup');
cancelSignup.addEventListener('click', hideSignup);
cancelSignup.addEventListener('touchstart', hideSignup);

const snackCard = document.querySelectorAll('.is-4');
snackCard.forEach(snack => {
  snack.addEventListener('click', displayDetail);
})
snackCard.forEach(snack => {
  snack.addEventListener('touchstart', displayDetail);
})


// FUNCTIONS
function loadHomepage() {
  document.querySelector('#allSnacks').style.display = "block";
  document.querySelector('#snackDetail').style.display = "none";
}

function displaySignup() {
  hideLogin();
  document.querySelector('#signup').style.display = "block";
}

function hideSignup() {
  document.querySelector('#signup').style.display = "none";
}

function displayLogin() {
  hideSignup();
  document.querySelector('#login').style.display = "block";
}

function hideLogin() {
  document.querySelector('#login').style.display = "none";
}

function displayDetail(event) {
  console.log('CLICKED', event.target)
  document.querySelector('#allSnacks').style.display = "none";
  document.querySelector('#snackDetail').style.display = "block";
}
