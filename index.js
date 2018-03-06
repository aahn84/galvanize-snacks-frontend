// DEV path
const path = 'http://localhost:3000';
// PROD path
// const path = 'https://mossy-mood.herokuapp.com';


/**ON LOAD**/
loadHomepage();

let allSnacks;
let snackName;


/**EVENT LISTENERS**/
// HOME nav
const navHome = document.querySelector('#navHome');
navHome.addEventListener('click', loadHomepage);
navHome.addEventListener('touchstart', loadHomepage);

// SIGNUP nav
const signupNavButton = document.querySelector('#signupNavButton');
signupNavButton.addEventListener('click', displaySignup);
signupNavButton.addEventListener('touchstart', displaySignup);

// LOGIN nav
const loginNavButton = document.querySelector('#loginNavButton');
loginNavButton.addEventListener('click', displayLogin);
loginNavButton.addEventListener('touchstart', displayLogin);

// MODAL REGISTER button
const registerButton = document.querySelector('#registerButton');
registerButton.addEventListener('click', registerUser);
registerButton.addEventListener('touchstart', registerUser);

// MODAL LOGIN button
const loginButton = document.querySelector('#loginButton');
loginButton.addEventListener('click', loginUser);
loginButton.addEventListener('touchstart', loginUser);

// MODAL CANCEL signup
const cancelSignup = document.querySelector('#cancelSignup');
cancelSignup.addEventListener('click', hideSignup);
cancelSignup.addEventListener('touchstart', hideSignup);

// MODAL CANCEL login
const cancelLogin = document.querySelector('#cancelLogin');
cancelLogin.addEventListener('click', hideLogin);
cancelLogin.addEventListener('touchstart', hideLogin);

// MODAL CLOSE signup
const signupClose = document.querySelector('#signupClose');
signupClose.addEventListener('click', hideSignup);
signupClose.addEventListener('touchstart', hideSignup);

// MODAL CLOSE login
const loginClose = document.querySelector('#loginClose');
loginClose.addEventListener('click', hideLogin);
loginClose.addEventListener('touchstart', hideLogin);

// MODAL toggle LOGIN from register
const loginFromRegister = document.querySelector('#loginFromRegister');
loginFromRegister.addEventListener('click', displayLogin);
loginFromRegister.addEventListener('touchstart', displayLogin);

// MODAL toggle REGISTER from login
const registerFromLogin = document.querySelector('#registerFromLogin');
registerFromLogin.addEventListener('click', displaySignup);
registerFromLogin.addEventListener('touchstart', displaySignup);

// SNACKS cards
function clickedSnack(event) {
<<<<<<< HEAD
  console.log('clicked snack', event.target.parentNode);
  const snackCard = document.querySelectorAll('.is-4');
  snackCard.forEach(snack => {
    snack.addEventListener('click', displayDetail);
  })
  snackCard.forEach(snack => {
    snack.addEventListener('touchstart', displayDetail);
  })
=======
  // console.log(event.target)
  let id = idFinder(event.target)
  console.log(id)
  
  // const snackCard = document.querySelectorAll('.is-4');
  // snackCard.forEach(snack => {
  //   snack.addEventListener('click', displayDetail);
  // })
  // snackCard.forEach(snack => {
  //   snack.addEventListener('touchstart', displayDetail);
  // })
>>>>>>> 34a293a232acbd6fd30359cc253085a4fc8ed58c
}

function idFinder(node) {
  // console.log(node)
  if (!node) return null
  if (!node.id) {
    return idFinder(node.parentNode)
  }
  // console.log('oh dear');
  return node.id
}

// ADD REVIEWS button
const addReviewButton = document.querySelector('#addReviewButton');
addReviewButton.addEventListener('click', addNewReview);
addReviewButton.addEventListener('touchstart', addNewReview);


/**FUNCTIONS**/
function loadHomepage() {
  document.querySelector('#allSnacks').style.display = "block";
  document.querySelector('#snackDetail').style.display = "none";

  axios.get(`${path}/api/snacks`)
    .then(res => {
      allSnacks = res.data;
      // console.log('all snacks', allSnacks);
      // console.log('names', allSnacks.name);

      // let columnthing = $('#allSnacksColumn')
      let allSnacksColumn = document.querySelector('#allSnacksColumn')
      // console.log(allSnacksColumn.innerHTML)
      allSnacks.snacks.forEach(snack => {
        allSnacksColumn.innerHTML += snackCardGen(snack)
        // snackName = snack.name
        // console.log(snackName)
      })

      // const cardTitle = document.querySelector('.card-header-title')
      // cardTitle.textContent = 'HELLO'
    })
    .catch(err => {
      console.log('Error!', err);
    })
}

function displaySignup() {
  hideLogin();
  document.querySelector('#signup').style.display = "block";
}

function hideSignup() {
  document.querySelector('#signup').style.display = "none";
}

function registerUser(e) {
  //need to make this
  //okay! xD
  //does not perform any validation... yet.
  let registerBody = {
    first_name: $('#regFirstName').val(),
    last_name: $('#regLastName').val(),
    email: $('#regEmail').val(),
    password: $('#regPassword').val()
  }
  axios.post(`${path}/api/users/register`, registerBody)
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.error(err)
    })
  //still need to handle success OR fail from above axios call
}

function displayLogin() {
  hideSignup();
  document.querySelector('#login').style.display = "block";
}

function hideLogin() {
  document.querySelector('#login').style.display = "none";
}

function loginUser() {
  //need to make this
}

function displayDetail(event) {
  console.log('CLICKED', event.target)
  document.querySelector('#allSnacks').style.display = "none";
  document.querySelector('#snackDetail').style.display = "block";
}

function addNewReview() {
  //need to make this
}
