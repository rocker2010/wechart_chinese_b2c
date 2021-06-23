/*
 * designby:liuwz
 * design date:2017/04/17
 */
$(function() {
	$(".person-det").animate({ opacity: 1, top: 3 +"rem"}, 1000);
	$(".fade .main-section").animate({ opacity: 1, }, 2000);
	$('.sign-close-btn').bind('click', function() {
		$('.sign-alert').hide();
		$('.cover').hide();
	});
	$('.cover').on('click', function() {
		$('.alertbox').hide();
		$('.sign-alert').hide();
		$('.cover').css('display', 'none');
	});

	$('.sure-phone').bind('click', function() {
		$('.cover').css('display', 'none');
		$('.show-phone').css('display', 'none');
	})

	$('#logout').unbind().bind('click', function() {
		$('.cover').css('display', 'block');
		$('.dele-sure').css('display', 'block');
		/* 确定退出 */
		$('.surebtn1').click(function() {
			$('.cover').css('display', 'none');
			$('.dele-sure').css('display', 'none');
			window.location = 'login.html';
		});
	});

	/* 取消退出 */
	$('.cancelbtn1').bind('click', function() {
		$('.cover').css('display', 'none');
		$('.dele-sure').css('display', 'none');
	});
});

function alertphone() {
	$('.cover').css('display', 'block');
	$('.show-phone').css('display', 'block');
}