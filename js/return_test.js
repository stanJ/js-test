var func1 = function(){
	var ary = [
		{
			name: 'aa',
			age: 10,
		},
		{
			name: 'aa',
			age: null,
		},
		{
			name: 'aa',
			age: 12,
		},
		{
			name: 'aa',
			age: null,
		},
	];
	$.each(ary, function(i, val) {
		if(val.age == null){
			return;
		}
		console.log('each inside');
	});
	console.log('func1 inside');
	
//	for(let i=0; i<ary.length; i++){
//		if(ary[i].age == null){
//			return;
//		}
//		console.log('for inside');
//	}
//	console.log('for func1 inside');
}
func1();