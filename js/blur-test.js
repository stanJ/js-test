$(function(){
	$(".aa").blur(function(){
		console.log('aa blur');
	})
	$(".bb").blur(function(){
		console.log('bb blur');
	})
	$(".bb").change(function(e){
		console.log('onChange', $(this).val());
//		blurAll();
	})
	$("body").click(function(e){
	  var target = e.target;
	  console.log(target)
	  if (target.tagName.toLowerCase() == 'body') {
	    console.log('body clicked');
	  }
	})
	setTimeout(function(){
//	  $("body").click();
//  $("body").focus();
//  $(".text").focus();
//  $(".extra-input").focus();
//  $(".test-input").focus();
	}, 5000);
	
})
function focusAll(){
	$("input, select").focus();
}

function blurAll(){
	$("input, select").blur();
}
