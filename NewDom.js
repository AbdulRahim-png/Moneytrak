console.log(document.all)
console.log(document.getElementById('main-header'))
var headerTitle = document.getElementById('header-title')
console.log(headerTitle)
var items =document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
items[1].textContent = "Hello 2"
items[3].computedStyleMap.backgroundColor = 'yellow';
items[1].style.fontWeight = 'bold'
items[1].style.backgroundColor = 'yellow'
items[2].style.backgroundColor = 'green'
items[2].style.fontWeight = 'bold'
items[0].style.fontWeight = 'bold'
items[3].style.fontWeight = 'bold'