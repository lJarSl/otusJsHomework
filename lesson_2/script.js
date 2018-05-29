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


/* третий вариант */

function getPath2(currEl){
	var arr = [];

	function eachElements(el){

		if(el === document.body) {
			return arr.reverse();
		}

		arr.push(el.tagName.toLowerCase() + getNthPosition(el));

		return eachElements(el.parentElement);

	}

	function getNthPosition(el){

		var previousEl = el.previousElementSibling,
			count = 1,
			result = '';


		while(previousEl){
			++count;
			previousEl = previousEl.previousElementSibling;
		}

		result = ':nth-child(' + count + ')';

		return result;

	}

	var strOut = eachElements(currEl).join('>');
	console.log(strOut);

}



/**
 * Задание 3.
 * Написать функцию intersect
 * Написать функцию, которая определяет, пересекаются ли два элемента на странице
 * intersect(node1, node2)
 */

function intersect(node1, node2){

	console.log('---------------------------------');

	function getSize(rect){
		return {
			height: rect.bottom - rect.top,
			width: rect.right - rect.left
		};
	}

	function getBigger(x1, x2){
		return x1 > x2 ? x1 : x2;
	}
	function getPositionDiff(x1, x2){
		return {
			top: Math.abs(x1.top - x2.top),
			bottom: Math.abs(x1.bottom - x2.bottom),
			left: Math.abs(x1.left - x2.left),
			right: Math.abs(x1.right - x2.right)
		};
	}

	var node1Position = node1.getBoundingClientRect(),
		node2Position = node2.getBoundingClientRect();

	node1Position['size'] = getSize(node1Position);
	node2Position['size'] = getSize(node2Position);

	var totalWidth = getBigger(node1Position.size.width, node2Position.size.width),
		totalHeight = getBigger(node1Position.size.height, node2Position.size.height),
		nodesPositionDiff = getPositionDiff(node1Position, node2Position);

	if(	nodesPositionDiff.top <= totalHeight
		&& nodesPositionDiff.bottom <= totalHeight
		&& nodesPositionDiff.left <= totalWidth
		&& nodesPositionDiff.right <= totalWidth){
		console.log('Пересекаются');
	}

}

setTimeout(function(){
	intersect(document.querySelector('.abspos .n1'), document.querySelector('.abspos .n2'));
}, 0);