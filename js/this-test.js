//var utilObj = {
//	func2: function(params){
//		var data = {aa: 1, bb: 2};
//		params.func(data);
//	}
//}
//var page = {
//	name: 'Stan',
//	func1: function(){
//		var vm = this;
//		utilObj.func2({
//			func: (data) => {
//				console.log(vm);
//				console.log('void this: ', this);
//			}
//		})
//	}
//	
//}
//var page = {
//	name: 'Stan',
//	func1: function(){
//		var vm = this;
//		utilObj.func2({
//			func: function(data){
//				console.log(vm);
//				console.log('void this: ', this);
//			}.bind(this)
//		})
//	}
//	
//}
//page.func1();

/*
 * 测试箭头函数
 */

//function foo() {
//	setTimeout(function(){
//	    console.log('id:', this.id);
//	}, 100);
//}

//function foo() {
//	setTimeout(() => {
//	    console.log('id:', this.id);
//	}, 100);
//}
//
//var id = 21;
////foo();
//foo.call({ id: 42 });


function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);


//function foo() {
//return () => {
//  return () => {
//    return () => {
//      console.log('id:', this.id);
//    };
//  };
//};
//}
//
//var f = foo.call({id: 1});
//
//var t1 = f.call({id: 2})()(); // id: 1
//var t2 = f().call({id: 3})(); // id: 1
//var t3 = f()().call({id: 4}); // id: 1

//var res = (function() {
//return [
//  (() => this.x).bind({ x: 'inner' })()
//];
//}).call({ x: 'outer' });
//console.log(res);