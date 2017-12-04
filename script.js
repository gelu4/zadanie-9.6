var list = document.getElementById('list');
			
var add = document.getElementById('addElem');
			
add.addEventListener('click', function() {
	var lenLi= document.getElementsByTagName('li');
	var len = lenLi.length;
	var element = document.createElement('li');	
	element.innerHTML = ('item' + ' ' + len);
	list.appendChild(element);
});