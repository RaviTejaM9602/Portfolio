const userName = document.querySelector('#username');
const userEmail = document.querySelector('#email');
const userMessage = document.querySelector('#message');

function useLocalStorage() {
  const contactFormData = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
}

const formInputs = document.querySelectorAll('input , email , textarea');
for (let j = 0; j < formInputs.length; j += 1) {
  formInputs[j].addEventListener('change', () => {
    useLocalStorage();
  });
}

const formData = JSON.parse(localStorage.getItem('contactFormData'));
if (formData !== null) {
  userName.value = formData.name;
  userEmail.value = formData.email;
  userMessage.value = formData.message;
}

