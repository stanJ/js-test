//var a = [];
//for (let i = 0; i < 10; i++) {
//	a[i] = function () {
//		console.log(i);
//	}
//}
//a[6]();

//function a(){
//	let i = 1;
//	function b(){
//		i = 2;
//		console.log(i);
//	}
//	b();
//	console.log(i);
//}
//a();

//for (let i = 0; i < 3; i++) {
//let i = 'abc';
//console.log(i);
//}

//console.log(foo);
//let foo = 2;

//var tmp = 123;
//
//if (true) {
//tmp = 'abc';
//let tmp;
//}

//function func(){
//	a = 1;
//	let a = 10;
//}
//func();

//function func(arg){
//	let arg;
//}

//function func(arg){
//	{
//		let arg;
//	}
//	
//}
//
//func();

//var tmp = new Date();
//
//function f() {
//console.log(tmp);
//if (false) {
//  let tmp = 'hello world';
//}
//}
//
//f();

//function f1() {
//let n = 5;
//if (true) {
//  let n = 10;
//}
//console.log(n); // 5
//}
//f1();

//if(true){
//	function f(){
//		console.log('hh');
//	}
//}

//function f() { console.log('I am outside!'); }
//
//(function () {
//if (false) {
//  // 重复声明一次函数f
//  function f() { console.log('I am inside!'); }
//}
//
//f();
//}());

//{
//	let a = 1;
//	{
//		var a = 10;
//		console.log(a);
//	}
//	console.log(a);
//}

//function* fibs(){
//	let a = 0;
//	let b = 1;
//	while(true){
//		yield b;
//		[a, b] = [b, a+b];
//	}
//}
//let [fir, sec, thi, fou, fif, six] = fibs();

//let x;
//({x} = {x: 1});

//function log(x, y='World'){
//	console.log(x, y);
//}
//log('Hello')
//log('Hello', 'China')
//log('Hello', '')

//function foo(x, x, y=1){
//	
//}

function foo({x, y = 5} = {}){
	console.log(x, y);
}
foo();
