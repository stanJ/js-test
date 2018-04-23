/*
 * apply call bind三者都可以用来改变函数内this的指向
 * apply方法还可以将原本只能传入多个参数变为传入一个参数数组，对于参数不确定的情况是很好用的
 * call方法传参除了第一个参数为this对象外，其他还是和原函数一样，所以当某对象没有我们想要的方法时，我们从其他对象找到想要的方法，然后用call方法传入某对象作为this指向，从而执行我们想要的操作
 * 当我们不需要立即执行的时候，可以用bind方法生成一个内部this指向改变的新函数
 */
//var argIterator = function (obj) {
//	for (let k in obj) {
//		console.log(`value: ${obj[k]}`)
//	}
//}
//var func1 = function(){
//	console.log(this);
//	argIterator(arguments);
//	console.log(arguments[0]);
//}
////func1.apply(null, [1, 5, 4, 0, 10]);
//func1(1, 2, 3, 4, 5)



/*
 * 通过slice方法将array-like对象转换为数组
 */
//var nodes = document.getElementsByTagName('input');
//console.log('nodes', nodes);
//var nodesAry = Array.prototype.slice.call(nodes);

/*
 * slice是浅拷贝,因此对于数组元素为对象的，由于复制的是引用地址，所以改变对象的属性值，复制得到的数组中对象也发生变化
 */
//var ary1 = [1, 2, 3, {
//	name: 'StanJ'
//}];
//var ary2 = ary1.slice();
//console.log('ary1: ' +　JSON.stringify(ary1));
//console.log('ary2: ' +　JSON.stringify(ary2));
//
//console.log('ary1 name: ' +　ary1[3].name);
//console.log('ary2 name: ' +　ary2[3].name);
//
//ary1[3].name = 'Jason';
//
//console.log('ary1: ' +　JSON.stringify(ary1));
//console.log('ary2: ' +　JSON.stringify(ary2));
//
//console.log('ary1 name: ' +　ary1[3].name);
//console.log('ary2 name: ' +　ary2[3].name);

