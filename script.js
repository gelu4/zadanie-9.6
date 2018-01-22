var list = document.getElementById('list');
			
var add = document.getElementById('addElem');

var addOne = document.getElementById('addOneElem');
add.addEventListener('click', function() {
	var lenLi= document.getElementsByTagName('li');
	var len = lenLi.length;
	var element = document.createElement('li');	
	element.innerHTML = ('item' + ' ' + len);
	list.appendChild(element);
});



addOne.addEventListener('click', function one() {
	var lenLi= document.getElementsByTagName('li');
	var len = lenLi.length;
	var element = document.createElement('li');
	element.innerHTML = ('item' + ' ' + len);
	list.appendChild(element);
					 //, { once: true });

addOne.removeEventListener('click',  one);
});
