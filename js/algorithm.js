
// 数组快速排序
//var ary = [85, 24, 63, 45, 17, 31, 24, 96, 50, 10];
//var ary = [10, 5, 3, 4, 4, 7, 6, 2];

//ary.sort();
//console.log(ary);

//var res = quickSort(ary);
//console.log(res);

function quickSort(ary) {
  if (ary.length <= 1) {
    return ary;
  }
  var index = Math.floor(ary.length / 2);
  var num = ary.splice(index, 1)[0];
  var left = [], right = [];
  for (let i = 0, len = ary.length; i < len; i++) {
    if (ary[i] < num) {
      left.push(ary[i]);
    } else {
      right.push(ary[i]);
    }
  }
  return quickSort(left).concat([num], quickSort(right));
}

//var res = bubbleSort(ary);
//var res = bubbleSort2(ary);
//console.log(res);
//console.log(ary === res);


// 冒泡排序有两种
// 一种是依次比较相邻两个数字，如果前一个比后一个大，就交换位置，这样最后一位一定是最大的，依此类推
function bubbleSort(ary) {
  for (let i = 0, len = ary.length; i < len - 1; i++) {
    for (let j = 0; j < len - 1 -i; j++) {
      if (ary[j] > ary[j + 1]) {
        let temp = ary[j];
        ary[j] = ary[j + 1];
        ary[j + 1] = temp;
      }
    }
  }
  return ary;
}

// 一种是比较第一位与其他位的数字，如果第一位大于其他位的数字，就交换位置，这样第一位一定是最小的，依此类推
function bubbleSort2(ary) {
  for (let i = 0, len = ary.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (ary[i] > ary[j]) {
        let temp = ary[i];
        ary[i] = ary[j];
        ary[j] = temp;
      }
    }
  }
  return ary;
}

var ary = [5, 2, 4, 3, 8, 10, 2, 3, 5];
//var res = unique(ary);
//var res = unique1(ary);
var res = unique2(ary);
console.log(res);


// 数组去重

// 借助indexOf方法遍历
function unique(ary) {
  var res = [];
  for (let i = 0, len = ary.length; i < len; i++) {
    let num = ary[i];
    if (res.indexOf(num) == -1) {
      res.push(num)
    }
  }
  return res;
}

// 最快的
function unique1(ary) {
  var obj = {}, res = [];
  for (let i = 0, len = ary.length; i < len; i++) {
    let num = ary[i];
    if (!obj[num]) {
      obj[num] = true;
      res.push(num);
    }
  }
  return res;
}

// 借助sort方法排序，然后只比较相邻数字是否一样
function unique2(ary) {
  ary.sort();
  var res = [ary[0]];
  for (let i = 1, len = ary.length; i < len; i++) {
    if (ary[i] !== res[res.length - 1]) {
      res.push(ary[i]);
    }
  }
  return res;
}
