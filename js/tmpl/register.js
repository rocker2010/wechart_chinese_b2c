/*
 * designby:liuwz
 * design date:2017/04/17
 */
$(function() {

	/* 门店号更改 */
	$('.register').on('click', '#changeMD', function() {
		$(this).parent().css('display', 'none');
		$(this).parent().next().css('display', 'block');
	});
	$('.register').on('click', '#changeMD2', function() {
		$(this).parent().css('display', 'none');
		$(this).parent().prev().css('display', 'block');
	});
	/* 门店号更改完成 */
	/* 发送手机验证 */
	$('.content,.content1').on('click', '#yanzhengCode', function() {
		$(this).html("<span id='djs'>2</span>秒内输入");
		$(this).addClass("Color070");
		var num = parseInt($('#djs').html());
		var flag = true;

		function numjia() {
			if(flag) {
				num = num - 1;
				if(num <= 0) {
					shopdz_alert("超时了！");
					flag = false;
				}
				$($("#djs")).html(num);
			}
		}
		var MyMar = setInterval(numjia, 1000);
	});
	/* 手机验证完成 */
	/* 删除图片 */
	$('.content').on('click', '#delImg', function() {
		$('.cover').css('display', 'block');
		$('.surebtn1').attr('pid', $(this).attr('addressid'));
		$('.dele-sure').css('display', 'block');
	});

	/* 取消删除 */
	$('.content').on('click', '.cancelbtn1', function() {
		$('.cover').css('display', 'none');
		$('.dele-sure').css('display', 'none');
	});

	/*上传提交*/
	$('.content').on('click', '#uploadSub', function() {
		shopdz_alert("您的证件已经提交，我们尽快帮您审核！");
	});
	/*编辑选项*/
	$('.content').on('click', '#editMobNum', function() {
		$(this).parent().css('display', 'none');
		$(this).parent().next().css('display', 'block');
	});
	/*保存选项*/
	$('.content').on('click', '#save_info', function() {
		shopdz_alert("保存成功！");
		$(this).parents("li").css('display', 'none');
		$(this).parents("li").prev().css('display', 'block');
	});

});