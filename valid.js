const form = document.querySelector('.input-section');
const NAME_REQUIRED = 'Please enter your name';
const emailMsg = document.querySelector('.email-error');
const inputMsg = document.querySelector('.input-error');

// Testing Email Functionality and Validating Email
function testEmail(email) {
  const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return emailPattern.test(email);
}
function validEmail(emailValue) {
  if (testEmail(emailValue) === true) {
    return true;
  } else {
    emailMsg.innerHTML = 'Please Enter the E-mail Pattern in Lower Case';
  }
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = form.querySelector('#email').value.trim();
  const inputValue = form.querySelector('#username').value.trim();
  console.log(inputValue);
  if (emailValue === '') {
    emailMsg.innerHTML = 'Email field is required!';
  } 
  if(inputValue === ''){
    inputMsg.innerHTML = 'Name field is required!';
  }
  else {
    validEmail(emailValue);
  }
  
});

