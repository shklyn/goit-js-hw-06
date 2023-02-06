// завдання 1
const arrayOfAllCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${arrayOfAllCategories.length}`);

// завдання 2
for (const item of arrayOfAllCategories) {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
}