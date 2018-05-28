/**
Задание 1.
Написать функцию getPath
Написать функцию getPath, находяющую уникальный css-селектор для элемента в документе

getPath(node) // => "div>div:nth-child(2)>span"
*/


/* Самый первый вариант */

/*var elems = document.querySelectorAll('*');

for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", getPath, true);
}


var path = '';

function getPath(e){
	e = e || window.event;

	var tagName = this.tagName.toLowerCase();

	if(tagName == 'html' || tagName == 'body') return;

	window.path += tagName;

	var nodes = Array.prototype.slice.call(this.parentNode.children);
	if(nodes.length>1){
		var position = nodes.indexOf(this)+1;
		window.path += ':nth-child(' + position + ')';
	}

	if(e.target === this){
		console.log(path);
		window.path = '';
	} else {
		window.path += '>';
	}
}*/

/* Второй вариант */
function getPath(node){

	var elems = document.querySelectorAll('*');
	getPath2.path = '';

	function addEventListeners(){
		for (var i = 0; i < elems.length; i++) {
		  elems[i].addEventListener("click", hundler, true);
		}
	}
	function removeEventListeners(){
		for (var i = 0; i < elems.length; i++) {
		  elems[i].removeEventListener("click", hundler, true);
		}
	}

	function hundler(e){
		e = e || window.event;

		var tagName = this.tagName.toLowerCase();

		if(tagName == 'html' || tagName == 'body') return;

		getPath2.path += tagName;

		var nodes = Array.prototype.slice.call(this.parentNode.children);
		if(nodes.length>1){
			var position = nodes.indexOf(this)+1;
			getPath2.path += ':nth-child(' + position + ')';
		}

		if(e.target === this){
			console.log(getPath2.path);
			getPath2.path = '';
			removeEventListeners();
		} else {
			getPath2.path += '>';
		}
	}

	addEventListeners();
	var eventClick = new Event('click');
	node.dispatchEvent(eventClick);
}