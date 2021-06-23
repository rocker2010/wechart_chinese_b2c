/*
 * designby:liuwz
 * design date:2017/04/17
 */
var ajaxsubmit = true;
//购物车数量加减
function delbasket() {
	shopdz_alert('商品删除成功！');
	sumprice();
	ajaxdel = true;
}
$(function(){
	//$('.cart-proprice').html($('.cart-proprice').prev().val());
	$('#shopcart').on('blur','.text_box',function(){
		var val = parseInt($(this).val());
		var price = $(this).parents().siblings("input['type'=hidden]").val();
		if(isNaN(val) || val == '' || val <= 0){
			$(this).val(1);
		}else{
			$(this).val(parseInt($(this).val()));
		}
		$(this).parents('.cart-list-rl').find('.cart-proprice span').html((parseFloat(price)*100)*parseInt($(this).val())/100);
		sumprice();
		numAddClass($(this));
		//var hid =  $(this).parents('.cart-list-r').find('input').val();
		//setbasket($(this), hid, $(this).val());
	})
	//加的效果
	$('#shopcart').on('click','.jia',function(){
		if(ajaxsubmit){
			if($(this).prev().find('.text_box').val() >= 99){
				shopdz_alert('超过商品购买上限！');
				return false;
			}
			ajaxsubmit = true;
			var hid =  $(this).parents().siblings("input['name'=id]").val();
			var label = $(this).prev().find('.text_box');
			label.val(parseInt(label.val())+1);
			$(this).parents('.cart-list-rl').find('.cart-proprice span').html((parseFloat(hid)*100)*parseInt(label.val())/100);
			sumprice();
			numAddClass(label);
		}
	});
	//减的效果
	$('#shopcart').on('click','.jian',function(){
		if(ajaxsubmit){
			//ajaxsubmit = false;
			var n = $(this).next().find('.text_box').val();
			var num = parseInt(n) - 1;
			if(num <= 0){
				ajaxsubmit = true;
				shopdz_alert('商品数量不能小于1');
				return false;
			}
			var hid =  $(this).parents().siblings("input['name'=id]").val();
			var label = $(this).next().find('.text_box');
			label.val(parseInt(label.val())-1);
			$(this).parents('.cart-list-rl').find('.cart-proprice span').html((parseFloat(hid)*100)*parseInt(label.val())/100);
			sumprice();
			numAddClass($(this).next().find('.text_box'));
		}
	});
})

//求商品总价
function sumprice(){
	var span = $('#sumprice');
	var sum = 0;
	$('.sumber').each(function(){
		if($(this).parents('li').find('input[name="id"]').attr('checked')){
			var num = parseFloat($(this).html());
			if(isNaN(num)){
	  			num = 0;
	  		}
		 	sum = sum + num;
		}
		$(this).html(parseFloat($(this).html()));
	});
	span.html(returnFloat(sum));
	if(parseFloat(sum) == 0){
		ajaxsubmit = true;
		$('#submit').addClass('bg');
		return ;
	}
	ajaxsubmit = true;
	$('#submit').removeClass('bg');
}