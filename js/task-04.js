const valueEl = document.querySelector('#value');

let counterValue = 0;

const onDecrementButtonClick = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
const onIncrementButtonClick = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick);
