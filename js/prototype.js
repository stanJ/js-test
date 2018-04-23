'use strict';

//var Person = function ({name, age}) {
//	this.name = name;
//	this.age = age;
//	this.introduce = function () {
//		console.log(`我叫${this.name}`)
//	}
//}
//Person.prototype.eat = function (food) {
//	console.log(`${this.name}喜欢吃${food}`)
//}
//
//var p = new Person({
//	name: '焦超',
//	age: 25
//})
//
//p.introduce();
//p.eat('饺子');
//
//var Worker = function ({company, position}) {
//	this.company = company;
//	this.position = position;
//	this.work = function () {
//		console.log(`我在${this.company}工作`);
//	}
//}
//Worker.prototype = new Person({});
//Worker.prototype.getJob = function () {
//	console.log(`我的职位是${this.position}`);
//}
//
//var w = new Worker({
//	company: '3ti',
//	position: 'web前端'
//})
//w.work();
//w.getJob();

//function SuperType(){ 
// this.property = true; 
//} 
//
//SuperType.prototype.getSuperValue = function(){ 
// return this.property; 
//}; 
//function SubType(){ 
// this.subproperty = false; 
//} 
////继承了 SuperType 
//SubType.prototype = new SuperType(); 
//SubType.prototype.getSubValue = function (){ 
// return this.subproperty; 
//}; 
//var instance = new SubType(); 
//console.log(instance.getSuperValue()); 

window.alert = console.log;

//var person = {};

//Object.defineProperty(person, 'name', {
//	writable: false,
//	value: 'Stan'
//});
//
//alert(person.name);
//person.name = 'Jack';
//alert(person.name);

//person.name = 'Stan';
//
//Object.defineProperty(person, 'name', {
//	configurable: true,
//	enumerable: true,
//	writable: true,
//	value: 'Stan'
//});

//Object.defineProperty(person, 'name', {
//	configurable: false,
//	value: 'Stan'
//});

//alert(person.name);
////delete person.name;
//alert(person.name);

//Object.defineProperty(person, 'name', {
//	configurable: false,
//	enumerable: false,
//	writable: true,
//	value: 'Jack'
//});
//Object.defineProperty(person, 'name', {
//	writable: true,
////	value: 'Stan'
//});
//Object.defineProperty(person, 'name', {
//	enumerable: true,
//});
//Object.defineProperty(person, 'name', {
//	configurable: true,
//});
//Object.defineProperty(person, 'name', {
//	value: 'Jack',
//});

//alert(person.name);
//person.name = 'Amy';
//alert(person.name);

/*
 * 访问器属性测试
 */

//var book = {
//	_year: 2004,
//	edition: 1
//}
//
//Object.defineProperty(book, 'year', {
//	get: function () {
//		return this._year;
//	},
//	set: function (newVal) {
//		if (newVal > 2004) {
//			this._year = newVal;
//			this.edition += newVal - 2004;
//		}
//	}
//});
//
//book.year = 2005;
//alert(book.edition);

/*
 * 定义多个属性
 */

//var book = {}; 
//Object.defineProperties(book, { 
//	_year: { 
//		value: 2004 
//	}, 
//	edition: { 
//	 	value: 1 
//	}, 
//	year: { 
//		get: function(){ 
//		 	return this._year; 
//		}, 
//		set: function(newValue){ 
//			if (newValue > 2004) { 
//				this._year = newValue; 
//				this.edition += newValue - 2004; 
//			} 
//		} 
//	} 
//}); 
//
//utilObj.objIterator(book);
//
//
//var descriptor = Object.getOwnPropertyDescriptor(book, '_year');
//alert(descriptor.value);
//alert(descriptor.configurable);
//
//var descriptor1 = Object.getOwnPropertyDescriptor(book, 'year');

/*
 * 创建对象
 */

// 工厂模式解决了创建多个相似对象的问题，但没有解决对象识别的问题

//function createPerson (name, age, job) {
//	var o = {
//		name: name,
//		age: age,
//		job: job,
//		sayName: function () {
//			alert(this.name);
//		}
//	}
//	return o;
//}
//
//var person1 = createPerson('Stan', 25, 'Web front-ender');
//var person2 = createPerson('Danny', 18, 'backender');

// 构造函数模式解决了对象类型识别的问题，但不同实例的方法并不是同一个Function实例

//function Person (name, age, job) {
//	this.name = name;
//	this.age = age;
//	this.job = job;
//	this.sayName = function () {
//		alert(this.name);
//	}
//}
//
//var person1 = new Person('Stan', 25, 'Web front-ender');
//var person2 = new Person('Danny', 18, 'backender');
//person1.sayName === person2.sayName // false

// 把函数定义从构造函数里移出来，解决了同一个函数的问题，但全局函数的存在让其毫无封装性可言

//function Person (name, age, job) {
//	this.name = name;
//	this.age = age;
//	this.job = job;
//	this.sayName = sayName
//}
//
//function sayName () {
//	alert(this.name);
//}
//
//var person1 = new Person('Stan', 25, 'Web front-ender');
//var person2 = new Person('Danny', 18, 'backender');
//person1.sayName === person2.sayName // true

/*
 * 原型模式
 */

//function Person () {
//	
//};
//Person.prototype.name = "Nicholas"; 
//Person.prototype.age = 29; 
//Person.prototype.job = "Software Engineer"; 
//Person.prototype.sayName = function(){ 
//	alert(this.name); 
//}; 
//var person1 = new Person(); 
//var person2 = new Person();

//alert(person1.hasOwnProperty("name")); //false 
//person1.name = "Greg"; 
//alert(person1.name); //"Greg"——来自实例
//alert(person1.hasOwnProperty("name")); //true 
//alert(person2.name); //"Nicholas"——来自原型
//alert(person2.hasOwnProperty("name")); //false 
//delete person1.name; 
//alert(person1.name); //"Nicholas"——来自原型
//alert(person1.hasOwnProperty("name")); //false 

//alert('name' in person1);

//person1.name = 'Stan';
//person1.age = 20;
//var keys = Object.keys(Person.prototype);
//alert(keys);

//function Person() {}
//Person.prototype = {
//	name: "Nicholas",
//	age: 29,
//	job: "Software Engineer",
//	sayName: function() {
//		alert(this.name);
//	}
//};
//Object.defineProperty(Person.prototype, "constructor", {
//	enumerable: false,
//	value: Person
//});

//function Person(name, age, job){ 
// this.name = name; 
// this.age = age; 
// this.job = job; 
// this.friends = ["Shelby", "Court"]; 
//} 
//Person.prototype = { 
// constructor : Person, 
// sayName : function(){ 
// alert(this.name); 
// } 
//} 
//var person1 = new Person("Nicholas", 29, "Software Engineer"); 
//var person2 = new Person("Greg", 27, "Doctor"); 
//person1.friends.push("Van"); 
//alert(person1.friends); //"Shelby,Count,Van" 
//alert(person2.friends); //"Shelby,Count" 
//alert(person1.friends === person2.friends); //false 
//alert(person1.sayName === person2.sayName); //true 

// 寄生构造函数模式
//function Person(name, age, job) {
//	var o = new Object();
//	o.name = name;
//	o.age = age;
//	o.job = job;
//	o.sayName = function() {
//		alert(this.name);
//	};
//	return o;
//}
//var friend = new Person("Nicholas", 29, "Software Engineer");
//friend.sayName(); //"Nicholas"


/*
 * 继承
 */

//function Class_0 () {
//this.p_0 = 0;
//}
//Class_0.prototype.getValue_0 = function () {
//return this.p_0;
//}
//
//function Class_1 () {
//this.p_1 = 1;
//}
//Class_1.prototype = new Class_0();
//Class_1.prototype.constructor = Class_0;
//Class_1.prototype.getValue_1 = function () {
//return this.p_1;
//}
//
//function Class_2 () {
//this.p_2 = 2;
//}
//Class_2.prototype = new Class_1();
//Class_2.prototype.constructor = Class_1;
//Class_2.prototype.getValue_2 = function () {
//return this.p_2;
//}
//
//function Class_3 () {
//this.p_3 = 3;
//}
//Class_3.prototype = new Class_2();
//Class_3.prototype.constructor = Class_2;
//Class_3.prototype.getValue_3 = function () {
//return this.p_3;
//}
//
//var instance_3 = new Class_3();
//alert(instance_3)

//function SuperType() {
//this.property = true;
//}
//SuperType.prototype.getSuperValue = function() {
//return this.property;
//};
//
//function SubType() {
//this.subproperty = false;
//}
////继承了 SuperType 
//SubType.prototype = new SuperType();
////添加新方法
//SubType.prototype.getSubValue = function() {
//return this.subproperty;
//};
////重写超类型中的方法
//SubType.prototype.getSuperValue = function() {
//return false;
//};
//var instance = new SubType();
//alert(instance.getSuperValue()); //false

//function SuperType() {
//this.colors = ["red", "blue", "green"];
//this.property = true;
//}
//SuperType.prototype.getSuperValue = function() {
//return this.property;
//};
//function SubType() {
////继承了 SuperType 
//SuperType.call(this);
//}
//var instance1 = new SubType();
//instance1.colors.push("black");
//alert(instance1.colors); //"red,blue,green,black" 
//var instance2 = new SubType();
//alert(instance2.colors); //"red,blue,green" 


//function SuperType(name) {
//this.name = name;
//this.colors = ["red", "blue", "green"];
//}
//SuperType.prototype.sayName = function() {
//alert(this.name);
//};
//
//function SubType(name, age) {
////继承属性
//SuperType.call(this, name);
//
//this.age = age;
//}
////继承方法
//SubType.prototype = new SuperType();
//SubType.prototype.constructor = SubType;
//SubType.prototype.sayAge = function() {
//alert(this.age);
//};
//var instance1 = new SubType("Nicholas", 29);
//instance1.colors.push("black");
//alert(instance1.colors); //"red,blue,green,black" 
//instance1.sayName(); //"Nicholas"; 
//instance1.sayAge(); //29 
//var instance2 = new SubType("Greg", 27);
//alert(instance2.colors); //"red,blue,green" 
//instance2.sayName(); //"Greg"; 
//instance2.sayAge(); //27

//function object(o) {
//function F() {}
//F.prototype = o;
//return new F();
//}
//var person = {
//name: "Nicholas",
//friends: ["Shelby", "Court", "Van"]
//};
//var anotherPerson = object(person);
//anotherPerson.name = "Greg";
//anotherPerson.friends.push("Rob");
//var yetAnotherPerson = object(person);
//yetAnotherPerson.name = "Linda";
//yetAnotherPerson.friends.push("Barbie");
//alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"

//var person = {
//name: "Nicholas",
//friends: ["Shelby", "Court", "Van"]
//};
//var anotherPerson = Object.create(person, {
//name: {
//  value: "Greg",
//  enumerable: false
//}
//});
//
//alert(anotherPerson.name); //"Greg"

/*
 * 寄生組合式继承
 */
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
  alert(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
  alert(this.age);
};

var instance = new SubType('Stan', 25);
alert(instance);

function inheritPrototype (subType, superType) {
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
