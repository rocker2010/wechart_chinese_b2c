/*
 * designby:liuwz
 * design date:2017/04/17
 */
//输入框获取焦点事件
$(function(){
	$('.sign-inp').bind({ 
		keyup:function(){
			if (this.value != ''){
				$(this).next('.dele').css('display','block');
			} else {
				this.value = this.defaultValue; 
			}
		}, 
		blur:function(){ 
			if (this.value == ""){
				this.value = this.defaultValue; 
				$(this).next('.dele').css('display','none');
			} 
		} 
	}); 
	
	$('.dele').bind('click',function(){
		$(this).prev('.sign-inp').val("");
		$(this).css('display','none');
		$('.signbtn').removeClass('send-out-bg');
		$('#register-btn1').removeClass('send-out-bg');
	});
	
	$(document).on('keyup','.phone',function(){
		var aa=$(this).parent().parent().find('.phone');
		var bb=$(this).parent().parent().find('.pword');
		var cc=$(this).parent().parent().find('.yanzheng');
		if(aa.val().length >0 && bb.val().length > 0 && cc.val().length > 0){
			$(this).parent().parent().find('.signbtn').addClass('send-out-bg');
		}else{
			$(this).parent().parent().find('.signbtn').removeClass('send-out-bg');
		}
	});
	
	$(document).on('keyup','.pword',function(){
		var aa=$(this).parent().parent().find('.phone');
		var bb=$(this).parent().parent().find('.pword');
		var cc=$(this).parent().parent().find('.yanzheng');
		if(aa.val().length >0 && bb.val().length > 0 && cc.val().length > 0){
			$(this).parent().parent().find('.signbtn').addClass('send-out-bg');
		}else{
			$(this).parent().parent().find('.signbtn').removeClass('send-out-bg');
		}
	});
	
	$(document).on('keyup','.yanzheng',function(){
		var aa=$(this).parent().parent().find('.phone');
		var bb=$(this).parent().parent().find('.pword');
		var cc=$(this).parent().parent().find('.yanzheng');
		if(aa.val().length >0 && bb.val().length > 0 && cc.val().length > 0){
			$(this).parent().parent().find('.signbtn').addClass('send-out-bg');
		}else{
			$(this).parent().parent().find('.signbtn').removeClass('send-out-bg');
		}
	});
	
});






