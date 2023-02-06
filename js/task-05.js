const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');


inputEl.addEventListener('input', (event) => {

    outputEl.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === '') {
        outputEl.textContent = "Anonymous";
    }
    
});