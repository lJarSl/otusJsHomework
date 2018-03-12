/**
 * Задание 1.
 *
 * Написать функцию sum, которая может быть исполнена любое количество раз
 * с не undefined аргументом. Если она исполнена без аргументов,
 * то возвращает значение суммы всех переданных до этого значений. 
 * sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n
 */

 // объект

var adder = {
	sum: 0,
	create: function(){
		return adder.loop;
	},
	loop: function(x){
		if(x){
			adder.sum += x;
		} else {
			console.log(adder.sum);
		}
		return adder.create();
	}
}

var sumInstance = adder.create();
sumInstance(1)()(20)(3)();



// функция

function adderCreate() {
	var value = 0;
  return function func(num) {
  	if(num) {
  		value += num;
  	} else {
		console.log(value);
  	}
  	return func;
  };
}

var sumInstance = adderCreate();

sumInstance(5)(2)()(22)();




/**
 * Задание 2.
 *
 * Написать polyfill для функции Object.create.
 * 
 * вместо create создаем create2
 */


if(typeof Object.create2 != 'function'){
	Object.create2 = (function(){

		function Temp(){};

		return function(obj){

			if(typeof obj != 'object'){
				return concole.log('error!');
			}

			Temp.prototype = obj;

			var _obj = new Temp();

			Temp.prototype = null;

			return _obj;
		}

	})();
}

//суперкласс
function C1() {
  this.value = 'smt ...';
}

//подкласс
function C2() {
  C1.call(this);
}

C2.prototype = Object.create2(C1.prototype);
C2.prototype.constructor = C2;

var C_obj = new C2();

console.log(C_obj.value);


/**
 * Задание 3.
 *
 * Написать функцию promiseReduce,
 * которая принимает массив promise-ов
 * в качестве аргументом и возвращает promise,
 * который будет ожидать исполнение всех переданных promise-ов и
 * выполнять reduce-функцию для каждого итогового значения (по аналогии с reduce).
 */

 function promiseReduce(promiseArr, func, start){

	this.sum = start;

	return new Promise(function(resolve, reject) {
		function loop(){

			if(!promiseArr.length){
				console.log(this.sum);
				return Promise.resolve(this.sum);
			}

			promiseArr[0].then(
				x => {
					func.call(this, x);
					//console.log(this.sum);
					promiseArr.shift()
					loop();
				}
			)
			
		}

		loop();
		
	})

 }

var promise0 = Promise.resolve(0),
	promise1 = Promise.resolve(1),
	promise2 = Promise.resolve(2);


var sumFn = function(num){
	this.sum += num;
}

promiseReduce([promise0, promise1, promise2], sumFn, 0)
	.then(res => console.log(res)); // => 3


