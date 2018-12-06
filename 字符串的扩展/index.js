//1.字符的Unicode表示法
/* console.log("\u{41}");
console.log("\u{20BB7}") */

//2.codePointAt()
/* var s = "𠮷";
console.log(s.length);
 */

/* var s = '𠮷';
console.log(s.charAt(1)) */

/* let s = '𠮷a';
for(let ch of s){
	console.log(ch);
	console.log(ch.codePointAt(0).toString(16));
} */
// console.log(String.fromCodePoint(0x20BB7))

/* let text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
	const element = text[i];
	console.log(element);
}
for (const value of text) {
	console.log(value);
} */

// includes方法
/* let s = 'Hello World';
console.log(s.startsWith('Hello', 0));
console.log(s.endsWith('World', 11));
console.log(s.includes('h')) */
/* 
let s = 'x'.repeat(3);
console.log(s); */

// padStart() padEnd()
/* console.log('x'.padStart(5,'ab'));
console.log('x'.padEnd(5,'ab'));
console.log('1'.padStart(4,'0')) */

/* let s= `\`In JavaScript this is\`
not legal.`;
console.log(s); */

/* let x = 1;
let y = 2;
console.log(`${x} + ${y} = ${x + y}`); */
/* 
function fn() {
	return 'Hello World';
}

console.log(`foo ${fn()} bar`); */

/* const tmpl = addrs => `
	<table>
	${addrs.map(addr => `
		<tr><td>${addr.first}</td></tr>
		<tr><td>${addr.last}</td></tr>
	`).join('')}
	</table>
`;
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];
console.log(tmpl(data)); */

// 实例：模板编译
let template = `
	<ul>
		<% for(let i=0; i< data.supplies.length ;i++) {%>
			<li><%= data.supplies[i] %>  </li>
		<% } %>
	</ul>
`;
//目标 语句
/* 
echo('<ul>');
for(let i=0; i < data.supplies.length; i++) {
  echo('<li>');
  echo(data.supplies[i]);
  echo('</li>');
};
echo('</ul>'); 
*/
function compile(template) {
	var evalExpr = /<%=(.+?)%>/g;
	var expr = /<%([\s\S]+?)%>/g;

	template = template
		.replace(evalExpr, '`); \n echo( $1 ); \n echo(`')
		.replace(expr, '`); \n $1 \n echo(`');

	template = 'echo(`' + template + '`);';

	let script =
		`(function parse(data) {
		let output = "";

		function echo(html) { 
			output += html;
		 }

		 ${ template}

		 return output;
	})`;
	return script;
}
let parse = eval(compile(template));
let html = parse({ supplies: ["broom", "mop", "cleaner"] });
console.log(html);