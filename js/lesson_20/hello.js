var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var someArray = [1, 2, 3];
var anotherArray = [1, 2, 3];
var sum = 0;
for (var i = 0; i < someArray.length; i++) {
    sum += someArray[i];
}
console.log(sum);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var light = Color.Green;
console.log(light);
// any:
var badVar = 42;
badVar = "forty two";
var n = badVar;
var s = badVar;
console.log(badVar.length);
console.log(badVar.length);
function throwException(message) {
    throw new Error(message);
}
function whileTrue() {
    while (true)
        ;
}
var complexResponse = function () { return ["Yuriy", 30]; };
console.log(complexResponse()[0]);
console.log(complexResponse()[1]);
var square = function (val) {
    var result = val.side * val.side;
    return result;
};
var doubleSquare = { side: 10 };
console.log("\u043F\u043B\u043E\u0449\u0430\u0434\u044C \u0440\u0430\u0432\u043D\u0430 " + square(doubleSquare));
function logger(target, key, descriptor) {
    console.log(target);
    console.log(key);
    console.log(descriptor);
}
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.method = function (x) {
        return x;
    };
    __decorate([
        logger
    ], A.prototype, "method", null);
    return A;
}());
new A().method(6);
