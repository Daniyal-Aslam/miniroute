const InputUrl = document.getElementById('url_box');
const miniroute_form = document.getElementById('miniroute_form');
let errorMessageDisplayed = false;

miniroute_form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (InputUrl.value === '' && !errorMessageDisplayed) {
    const errorMessage = document.createElement('small');
    errorMessage.textContent = 'Please add a URL';

    InputUrl.parentNode.appendChild(errorMessage);

    InputUrl.focus();

    errorMessageDisplayed = true; 
    setTimeout(() => {
      errorMessage.remove();
      errorMessageDisplayed = false;
    }, 2000);
  } else if (InputUrl.value !== '' && errorMessageDisplayed) { 
    const errorMessage = InputUrl.parentNode.querySelector('small');
    if (errorMessage) {
      errorMessage.remove();
      errorMessageDisplayed = false;
    }
  } 
  const submitButton = document.getElementById('submit_button');
  submitButton.disabled = !errorMessageDisplayed; 
});
