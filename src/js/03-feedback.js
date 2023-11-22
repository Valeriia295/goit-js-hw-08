import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

let data = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
reloadThePage();

form.addEventListener('input', function () {
  storedInLocalStorage();
});

function reloadThePage() {
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
}

const handleSubmit = event => {
  event.preventDefault();
  if (email.value !== '' || message.value !== '') {
    console.log({
      email: email.value,
      message: message.value,
    });
  }

  if (email.value === '' || message.value === '') {
    return alert('Будь ласка, заповніть всі поля');
  }

  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
  data = {};
};

form.addEventListener('submit', handleSubmit);

const storedInLocalStorage = throttle(() => {
  if (email.value !== '' || message.value !== '') {
    data = {
      email: email.value,
      message: message.value,
    };
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);
