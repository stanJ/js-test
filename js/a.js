var app = new Vue({
	el: '#app',
	data: {
		obj: {
			a: '',
			b: '',
		},
		ary1: [],
		ary2: [],
	},
	created: function(){
//		var ary = [1, 2, 3];
//		this.ary1 = ary;
//		
//		this.ary2 = ary;
//		this.ary3 = ary;
//		this.ary1 = [];
	},
	watch: {
		ary1: function(){
			console.log('ary1变化了');
		}
	},
	methods: {
		aa: function(e){
			alert(11);
		}
	}
	
})

//var a = {
//	validate: function(callback){
//		console.log('----------11-----------');
//		console.log(this);
//		var valid = true;
//		callback(valid);
//	}
//}
//var b = {
//	handleSave: function(){
//		console.log('----------22-----------');
//		console.log(this);
//		a.validate(function(valid){
//			console.log('----------33-----------');
//			console.log(this);
//		})
//	}
//}
//b.handleSave();

//foo = function(){
//	this.myName = "Foo function.";
//}
//foo.prototype.sayHello = function(){
//	alert(this.myName);
//}
//foo.prototype.bar = function(){
//	setTimeout(this.sayHello.bind(this), 1000);
//}
//var f = new foo;
//f.bar()