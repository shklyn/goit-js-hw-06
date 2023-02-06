const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let ingredientsElArray = [];

for (const ingredient of ingredients) {

  const ingredientEl = document.createElement('li');

  ingredientEl.textContent = ingredient

  ingredientEl.classList.add('item');

  ingredientsElArray.push(ingredientEl);
}


const ingredientsElList = document.querySelector('ul#ingredients')

ingredientsElList.append(...ingredientsElArray);
