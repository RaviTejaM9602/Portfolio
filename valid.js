const form = document.querySelector('.input-section');
const emailMsg = document.querySelector('.email-error');
//Testing Email Function & Validating Email 


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = form.querySelector('#email').value.trim();
  if (emailValue === '') {
    emailMsg.innerHTML = 'Email field is required!';
  } else {
    validEmail(emailValue);
  }
});