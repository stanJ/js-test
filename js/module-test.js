var module = {
	id: 'hello',
	exports: {
		
	},
};
var load = function(exports, module){
	module.exports.a = function(){
		console.log('11');
	}
	module.exports.b = function(){
		console.log('22');
	}
	//只有用以下这种方式才能改变module.exports对象的内容
	exports.c = function(){
		console.log('33');
	}
	//下面这种方式不会影响module.exports内容
//	exports = {
//		d: '44',
//		e: '55',
//	};
	module.exports = {
		d: '44',
		e: '55',
	};
	return module.exports;
}
var exported = load(module.exports, module);
var save = function(module, exported){
	console.log(module, exported);
}
save(module, exported);
