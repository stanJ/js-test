document.addEventListener('DOMContentLoaded', function() {
  var oUl = document.getElementById('ul-test');
  oUl.addEventListener('click', function(e) {
    //window.event不是一个标准特性，来源于ie,firefox不支持
    var event = e || window.event;
    //event.srcElement不是一个标准特性，来源于ie,firefox不支持
    var target = event.target || event.srcElement;
    if(target.tagName.toLowerCase() === 'li') {
      console.log(target.innerHTML);
    }
  })
})

//$(function() {
//$('#ul-test').on('click', 'li', function(e) {
//    console.log($(this).html());
//})
//})