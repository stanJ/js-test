//var obj = {
//	name: 'stan',
//	age: 12,
//}
//var newObj = Object.assign({}, obj, {
//	gender: 'male',
//	location: 'shanghai',
//})
//console.log(newObj);


var obj1 = {
  name: 'stan',
  age: 12,
  friends: [{
    name: 'Jack',
    age: 11,
    friends: [{
      name: 'Rose',
      age: 10
    }]
  }],
  eat: function (food) {
    console.log(this.name + '吃' + food)
  },
  home: undefined
}

var res = clone(obj1);

function clone (obj) {
  var newObj = {};
  for (let k in obj) {
    cloneCore(obj[k], newObj, k)
  }
  return newObj;
}

function cloneCore (value, newObj, key) {
  if (typeof value === 'object' && value instanceof Array) {// 数组
    newObj[key] = [];
    for (let i = 0, len = value.length; i < len; i++) {
      cloneCore(value[i], newObj[key], i)
    }
  } else if (typeof value === 'object' && value instanceof Object) {// 对象
    newObj[key] = {};
    for (let k in value) {
      cloneCore(value[k], newObj[key], k)
    }
  } else {
    newObj[key] = value;
  }
}

//console.log(JSON.parse(JSON.stringify(obj1)));


function clone(obj){    
  if(!obj&& typeof obj!== 'object'){      
    return;    
  }
  var newObj=obj.constructor===Object?{}:[];    
  for(var key in obj){              
    newObj[key] =(obj[key]&&typeof obj[key]==='object')?clone(obj[key]):obj[key];       
  }    
  return newObj; 
}

