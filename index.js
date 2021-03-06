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

// MODAL close-cancel review
const closeReviewModal = document.querySelector('#addReviewClose');
closeReviewModal.addEventListener('click', hideReviewModal);
closeReviewModal.addEventListener('touchstart', hideReviewModal);
const cancelReviewModal = document.querySelector('#cancelReview');
cancelReviewModal.addEventListener('click', hideReviewModal);
cancelReviewModal.addEventListener('touchstart', hideReviewModal);

// MODAL SUBMIT review
const submitReviewButton = document.querySelector('#submitReview');
submitReviewButton.addEventListener('click', submitReview);
submitReviewButton.addEventListener('touchstart', submitReview);


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

// generate SNACKS cards
function clickedSnack(event) {
  let id = idFinder(event.target)
  // console.log(id)

  const snackCard = document.querySelectorAll('.is-4');
  snackCard.forEach(snack => {
    snack.addEventListener('click', displayDetail);
  })
  snackCard.forEach(snack => {
    snack.addEventListener('touchstart', displayDetail);
  })

  axios.get(`${path}/api/snacks/${id}`)
    .then(snack => {
      // console.log(snack.data);
      let details = document.querySelector('#snackDetail')
      details.innerHTML = generateDetails(snack.data)
      return details;
    })
    .catch(err => {
      console.log('Error!', err);
    })
}

// find clicked ID
function idFinder(node) {
  // console.log(node)
  if (!node) return null
  if (!node.id) {
    return idFinder(node.parentNode)
  }
  // console.log('oh dear');
  return node.id
}

function displayReviewModal() {
  document.querySelector('#addReviewModal').style.display = "block";
}

function hideReviewModal() {
  document.querySelector('#addReviewModal').style.display = "none";
}

function submitReview() {
  let id = document.querySelector('#snackId').value;
  console.log(id);

  let reviewText = document.querySelector('textarea').value;
  // console.log(reviewText);
  axios.post(`${path}/api/reviews/${id}`)

  //need more stuff here!!!!!
}
