import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener(
  'input',
  throttle(function () {
    const inputData = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
  }),
  500
);

form.addEventListener('submit', event => {
  event.preventDefault();
  const formInput = {
    email: email.value,
    message: message.value,
  };
  console.log(formInput);
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
});
