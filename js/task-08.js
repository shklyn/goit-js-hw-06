const form = document.querySelector('form.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (form.elements.email.value === '' || form.elements.password.value === '') {
        alert("Please fill in all the fields!")
    }
    console.log(`email: ${form.elements.email.value}, password: ${form.elements.password.value}`);
  event.currentTarget.reset();

}
