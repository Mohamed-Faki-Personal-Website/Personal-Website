const form = document.querySelector(".form form");
const submitButton = document.querySelector("input[type='submit']");
const scriptURL = 'https://httpbin.org/post';

form.addEventListener('submit', e => {
  e.preventDefault();
  submitButton.disabled = true;
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: 'POST', body: requestBody })
    .then(response => {
      alert('Success!', response);
      submitButton.disabled = false;
      window.location.href = 'index.html';
    })
    .catch(error => {
      alert('Error!', error.message);
      submitButton.disabled = false;
    });
});