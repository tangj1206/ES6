// console.log(0b111110111 === 503);

/* //非严格模式
(function(){
	console.log(0o11 === 011);
})();

//严格模式
(function(){
	'use strict';
	console.log(0o11 == 011);
})(); */

/* console.log(
	Number.isFinite(Infinity),
	Number.isFinite(-Infinity),
	Number.isFinite(15),
	Number.isFinite(.8),
	Number.isFinite('13213')
); */

/* console.log(
	Number.isNaN(NaN),
	Number.isNaN(123)
); */

/* console.log(
	Number.isInteger(12.3)
);
 */

/* console.log(
	Math.trunc(4.1),
	Math.trunc(4.9),
	Math.trunc(-4.1),
	Math.trunc(-4.9),
	Math.trunc(-0.1234)
); */

//Math.trunc方法模拟
/* Math.trunk = function (x) {
	return x < 0 ? Math.ceil(x) : Math.floor(x);
} */

/* console.log(
	Math.sign(-10),
	Math.sign(11),
	Math.sign(-0),
	Math.sign(0)
); */

// math.sign 方法模拟
/* Math.sign = Math.sign || function (x) {
	x = +x; //convert to a number
	if (x === 0 || isNaN(x)) {
		return x;
	}
	return x > 0 ? 1 : -1;
} */

/* console.log(
	Math.cbrt(8)
); */

