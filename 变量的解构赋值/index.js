/* let [a, b, c] = [1, 2, 3];
console.log(`a:${a} b:${b} c:${c}`);

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(`foo:${foo} bar:${bar} baz:${baz}`);

let [, , third] = ["foo", "bar", "baz"];
console.log(third);

let [x, , y] = [1, 2, 3];
console.log(`x:${x} y:${y}`);

let [head, ...tail] = [1, 2, 3, 4];
console.log(`head:${head} tail:${tail}`);

let [w, v, ...z] = ['a'];
console.log(`w:${w} v:${v} z:${z}`); */

/* let [x, y] = [1, 2, 3];
console.log(`x:${x} y:${y}`);

let [a, [b], d] = [1, [2, 3], 4];
console.log(`a:${a} b:${b} d:${d}`); */

/* let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(`x:${x} y:${y} z:${z}`); */

/* let [foo = true] = [];
console.log(foo);

let [x = 1] = [undefined];
console.log(x); 
let [x = 1] = [null];
console.log(x);


function f() {
	console.log('aaa');
	return 'aaa';
}
let [x = f()] = [undefined];
console.log(x);
*/

// 对象的解构赋值
/* let {foo, bar } = {foo:'aaa',bar:'bbb'};
console.log(`foo:${foo} bar:${bar}`) 

let { baz } = { foo: 'aaa', bar: "bbb" };
console.log(`baz:${baz}`); */

/* let { foo : baz } = {foo:"aaa",bar:"bbb"};
console.log(baz);

let obj = { first:'hello',last:'world'};
let { first:f,last:l} = obj;
console.log(`f:${f} l:${l}`); */

/* let obj = {
	p: [
		'Hello',
		{ y: 'world' }
	]
};

let = { p, p: [x, { y }] } = obj;
console.log(x,y); */

/* const node = {
	loc: {
		start: {
			line: 1,
			column: 5
		}
	}
};

let { loc, loc: { start }, loc: { start: { line } } } = node;
console.log(`loc:${loc} start:${start} line:${line}`); */

/* let obj = {};
let arr = [];

({ foo: obj.prop, bar: arr[0] } = { foo:123,bar:true});
console.log(arr); */

/* var { x = 3 } = {};
var { x, y = 5 } = { x: 1 };
var { x: y = 5 } = {};
var { x: y = 3 } = { x: 5 };
var { message: msg = 'Something went wrong' } = {}; */

/* let {foo:{bar}} = {foo:'baz'};
console.log(bar); */

/* let {sin, cos, tan} = Math;
console.log(sin, cos, tan); */

/* let arr = [1,2,3];
let {0:first,[arr.length-1]:last} = arr;
console.log(first, last); */

// 字符串的解构赋值

/* const [a,b,c,d,e] = 'hello';
console.log(a,b,c,d,e); */

/* let {length:len} = 'hello';
console.log(len); */

//数值和布尔值的解构赋值
/* let {toString:s} = 123;
console.log(s); */

/* function add([x, y]) {
	console.log(arguments);
	return x + y;
}
console.log(add([1, 2])); */

/* [[1, 2], [3, 4]].map(([a, b]) => a + b) */

/* function move({ x = 0, y = 0 } = {}) {
	console.log([x, y]);
	return [x, y]
}
move({ x: 3, y: 4 });
move({ x: 3 });
move({});
move(); 

function move({ x, y } = { x: 0, y: 0 }) {
	console.log([x, y])
	return [x, y]
}

move({ x: 3, y: 4 });
move({ x: 3 });
move({});
move();
*/

//用途
// 1.交换变量值
/* let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); */

//从函数返回多个值
function example() {
	return [1, 2, 3]
}
let [a, b, c] = example();
console.log(a, b, c);

function example1() {
	return {
		foo: 1,
		bar: 2
	}
}
let { foo, bar } = example1();
console.log(foo, bar)

