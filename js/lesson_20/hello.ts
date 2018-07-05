let someArray: number[] = [1, 2, 3];
let anotherArray: Array<number> = [1, 2, 3];
let sum: number = 0;

for(let i: number = 0; i < someArray.length; i++){
	sum += someArray[i]
}

console.log(sum);

// enum
enum Color {Red, Green, Blue};
let light: Color = Color.Green;

console.log(light);

// any:
let badVar: any = 42;
badVar = "forty two";

let n: number = badVar;
let s: string = badVar;

console.log((<string> badVar).length);
console.log((badVar as string).length);

function throwException(message: string): never {
	throw new Error(message);
}
function whileTrue(): never {
	while(true);
}

const complexResponse: () => [string, number] 
		= () => ["Yuriy", 30];

console.log(complexResponse()[0]);
console.log(complexResponse()[1]);


interface NumberValue {
	side: number;
}

const square: (val: NumberValue) => number
	= (val) => {
		let result = val.side*val.side;
		return result;
	};

 let doubleSquare: NumberValue = {side: 10};

console.log(`площадь равна ${square(doubleSquare)}`);

function logger (target, key, descriptor){
	console.log(target);
	console.log(key);
	console.log(descriptor);
}

class A {
	@logger
	method(x: number){
		return x;
	}
}

new A().method(6);