//var page = {
//	bindEvent: function(){
////		$(".test-item").click(function(){
////			console.log(new Date().valueOf());
////		})
////		$(".test-wrapper").off('click').on('click', '.test-item', function(){
////			console.log(new Date().valueOf());
////		})
//		$(".test-wrapper").on('click', '.test-item', function(){
//			console.log(new Date().valueOf());
//		})
//	}
//}
//$(function(){
//	page.bindEvent();
//	var h1 = '<div class="test-wrapper"></div>';
//	var h2 = '<button type="button" class="test-item">点击</div>';
//	$(".test-outer").html(h1);
//	$(".test-wrapper").html(h2);
//	page.bindEvent();
//})

/*
 * 测试使用元素属性来绑定事件
 */

function showMessage () {
  console.log(event);
}

var el1 = document.getElementsByClassName('test-wrapper')[0];
el1.addEventListener('click', function (e) {
  console.log('event', event);
  console.log(e)
}, false)

var el2 = document.getElementsByClassName('test-outer')[0];
el2.addEventListener('click', function (e) {
  console.log(e)
}, false)

