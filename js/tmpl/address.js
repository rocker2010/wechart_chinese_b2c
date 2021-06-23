/*
 * designby:liuwz
 * design date:2017/04/17
 */

$(function(){
	/* 限制收货人名字长度 */
	$('#address-name').blur(function(){
		judgeuser($(this), '名字不能超过七位！');
	})
	
	/* 收货地址事件开始 */
		/* 删除收货地址 */
	    $('.content').on('click','.address-dele',function(){
	    	$('.cover').css('display','block');
	    	$('.surebtn1').attr('pid',$(this).attr('addressid'));
	    	$('.dele-sure').css('display','block');
		});
		/* 确定删除收货地址 */
		$('.content').on('click','.surebtn1',function(){
			$('.cover').css('display','none');
			$('.dele-sure').css('display','none');
			var par = $(this).parent().parent().parent();
			address_id = $('.surebtn1').attr('pid');
//			deladdress(data, $('.liclass_' + address_id));
		});
	    /* 取消删除收货地址 */
	    $('.content').on('click','.cancelbtn1',function(){
	    	$('.cover').css('display','none');
	    	$('.dele-sure').css('display','none');
	    });
	   	
		/* 设置默认收货地址 */
		$('.content').on('click','.setdefault',function(){
			var data = {
				key:key,
				member_id:$(this).attr('memberid'),
				address_id:$(this).attr('addressid')
			}
			setdefault(data);
		})
		/* 取消操作 */
		$('.cancelbtn2').bind('click',function(){
			$('.address-choice').css('display','block');
			$('.address-edit-page').css('display','none');
			$('#head_tit').html('地址管理');
		})
		
		/* 新建收货地址 */
		$('.content').on('click','.new-build',function(){
			$('#editaddress_id').val('');
			$('#address-name').val('');
			$('#address-phone').val('');
			$('#address-word').val('');
			$('.address-choice').hide();
			$('.address-edit-page').show();
			$('#head_tit').html('新建');
		})
		/*点击修改选中发货地址*/
		$('.content').on('click','.address-edit',function(){
			var par = $(this).parent().parent();
			
			$('#editaddress_id').val($(this).attr('addressid'));
			$('#address-name').val(par.find('.name2').text());
			$('#address-phone').val(par.find('.phone1').text());
			$('#address-word').val(par.find('.address-word_hide').text());
			
			$('.address-choice').hide();
			$('.address-edit-page').show();
			$('#head_tit').html('修改地址');
		})
		/* 判断收货信息编辑页面信息输入是否正确 提交操作 */
	/* 收货地址事件结束 */
});
function deladdress(data, label, callback){
	deladdresscallback = callback || deladdresscallback;
	url = ApiUrl + deladdressurl;
	addressdata(url, data, deladdresscallback, label);
}