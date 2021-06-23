/*
 * designby:liuwz
 * design date:2017/04/17
 */
var ajaxsubmit = true;
$(function(){
	//加的效果
	$('.spec-choice-box,.specbox').on('click','.jia',function(){
		if(ajaxsubmit){
			if($(this).prev().find('.num-input').val() >= 99){
				shopdz_alert('超过商品购买上限！');
				return false;
			}
			ajaxsubmit = true;
			var label = $(this).prev().find('.num-input');
			label.val(parseInt(label.val())+1);
			numAddClass(label);
		}
	});
	//减的效果
	$('.spec-choice-box,.specbox').on('click','.jian',function(){
		if(ajaxsubmit){
			//ajaxsubmit = false;
			var n = $(this).next().find('.num-input').val();
			var num = parseInt(n) - 1;
			if(num <= 0){
				ajaxsubmit = true;
				shopdz_alert('商品数量不能小于1');
				return false;
			}
			var label = $(this).next().find('.num-input');
			label.val(parseInt(label.val())-1);
			numAddClass($(this).next().find('.num-input'));
		}
	});
})





 