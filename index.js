//const ul = document.querySelector('.items');

//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
// Get all <li> elements within the <ul>
const listItems = document.querySelectorAll('ul li');
console.log(document.all)

// Check if there are at least two <li> elements
if (listItems.length >= 2) {
    // Change the color of the first <li> to green
    listItems[0].style.color = 'green';

    // Change the color of the second <li> to yellow
    listItems[1].style.color = 'yellow';
   
}
