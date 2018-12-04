/* {
	let a = 10;
	var b = 1;
}
console.log(a);
console.log(b); */

/* for (let i = 0; i < 10; i++) {
	
}
console.log(i); */

/* var a= [];
for (let i = 0; i < 10; i++) {
	a[i] = function(){
		console.log(i);
	}
}
a[6](); */

/* for (let i = 0; i < 3; i++) {
	console.log(i);
	let i = 'abc'
	console.log(i);不存在变量提升
*/

// 暂时性死区
/* var temp = 123;
if (true) {
	tmp = 'abc';
	let tmp;
} */

/* if (true) {
	// TDZ开始
	tmp = 'abc';
	console.log(tmp);

	let tmp;//TDZ结束
	console.log(tmp);// undefined

	tmp = 123;
	console.log(tmp);//123
} */

// typeof 操作不在安全
// console.log(typeof undeclared_variable);

/* function bar(x = y, y = 2) {
	return [x, y]
} 
function bar(x = 2, y = x) {
	return [x, y]
}
bar();
*/

// 不允许重复声明
//报错
/* function func() {
	let a = 10;
	var a = 1;
} */
//报错
/* function func() {
	let a = 10;
	let a = 1;
}
func(); */

/* function func(arg){
	{
		let arg;
	}
}
func(1); */

// 2.块级作用域
/* var tmp = new Date();

function f() {
	console.log(tmp);
	if (false) {
		var tmp = 'hello world';
	}
}

f(); */

/* function f1() {
	let n = 5;
	if (true) {
		let n = 10;
	}
	console.log(n);// 5
}

f1(); */

/* {{{{
	{let insane = 'Hello world'}
	console.log(insane);
}}}} */

/* {{{{
	let insane = 'Hello World'
	{let insane = 'Hello World'}
}}}} */

/* function f() {
	console.log('I am outside!');
}

(function () {
	if (false) {
		// 重复声明一次函数f
		function f(){
			console.log('I am inside!');
		}
	}
	f();
}()) */


/* const PI = 3.1415;
console.log(PI);
PI = 2; 
const foo;
foo = 2;
*/

/* const foo = {};

// 为foo添加一个属性，可以成功
foo.prop = 123;
console.log(foo);

//将foo 指向另一个对象，就会报错
foo = {};//  */

/* const a = [];
a.push('Hello');
a.length = 0;
a = ['Dave']; */

/* const foo = Object.freeze({});

foo.prop = 123;
console.log(foo); */

/* var constantize = (obj) => {
	Object.freeze(obj);
	Object.keys(obj).forEach((key, i) => {
		if (typeof obj[key] === 'object') {
			constantize(obj[key]);
		}
	})
} */

// 方法一
(typeof window != 'undefined'
	? window : (typeof process === 'object' &&
		typeof require === 'function' &&
		typeof global === 'object')
		? global
		: this);

// 方法二
var getGlobal = function(){
	if (typeof self !== 'undefined') {
		return self;
	}
	if (typeof window !== 'undefined') {
		return window;
	}
	if (typeof global !== 'undefined') {
		return global;
	}
	throw new Error('unable to locate global object');
}