const form = document.querySelector('.input-section');
const emailMsg = document.querySelector('.email-error');

// Testing Email Functionality and Validating Email
function testEmail(email) {
  const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return emailPattern.test(email);
}
function validEmail(emailValue) {
  if (testEmail(emailValue) === true) {
    form.submit();
  } else {
    emailMsg.innerHTML = 'Please Enter the E-mail Pattern in Lower Case';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = form.querySelector('#email').value.trim();
  if (emailValue === '') {
    emailMsg.innerHTML = 'Email field is required!';
  } else {
    validEmail(emailValue);
  }
});
