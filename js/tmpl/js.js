/*
 * designby:liuwz
 * design date:2017/04/17
 */
var screenH = document.documentElement.clientHeight; /* 页面的高度 */
var tag = 0;
//返回到顶部
function goTopEx() {
	var obj = document.getElementById("goTopBtn");

	function getScrollTop() {
		return document.documentElement.scrollTop + document.body.scrollTop;
	}

	function setScrollTop(value) {
		if(document.documentElement.scrollTop) {
			document.documentElement.scrollTop = value;
		} else {
			document.body.scrollTop = value;
		}
	}
	window.onscroll = function() {
		getScrollTop() > screenH - 100 ? obj.style.display = "" : obj.style.display = "none";
	}
	obj.onclick = function() {
		var goTop = setInterval(scrollMove, 10);

		function scrollMove() {
			setScrollTop(getScrollTop() / 1.1);
			if(getScrollTop() < 1) clearInterval(goTop);
		}
	}
}
/* 公共alert 函数 */
function shopdz_alert(title, second, callback) {
	$('.shopdz_alert').remove();
	$('#alertbox').remove();
	var _tag = tag++;
	var html = '<div id="alertbox"><div id="address-remind-' + _tag + '" class="address-remind shopdz_alert">' + title + '</div></div>';
	if(typeof second == 'number') {
		var timeout = second * 1000;
	} else {
		var timeout = 1000;
	}
	$('body').append(html);
	initPage();
	$('#address-remind-' + _tag).fadeIn().delay(timeout).fadeOut(1000, 'swing', function() {
		if(typeof callback == 'function') callback();
		$('#address-remind-' + _tag).remove();
		$('#alertbox').remove();
	});
}
//返回按钮
function bindcart() {
	$('.goback-header').find('.back-icon').bind('click', function() {
		goBack();
	});
}

function goBack() {
	document.referrer === '' ?
		window.location.href = Math.random() :
		window.history.go(-1);
}

function initPage() {
	var remingW = $(document).find('#alertbox').children('.address-remind').width();
	var bodywidth = 0;
	if(document.body.clientWidth > 0) {
		bodywidth = document.body.clientWidth;
	}
	if(bodywidth < 540) {
		$(".header-box,.index-header,.foot-btn").css("width", "100%");
		$(".address-remind").css({ "width": "auto", "left": ((bodywidth - remingW) / 2) + 'px' });
	} else {
		$("body").find(".header-box").css("width", "100%");
		$("body").find(".index-header").css("width", "540px");
		$("body").find(".foot1 .nav ul").css("width", "540px");
		$("body").find(".register_info").css("width", "540px");
		$(".wrapper").css("width", "540px");
		$(".content").css({ "width": "540px", "padding": "4rem auto 4.5rem auto" });
		$(".swiper-container,.swiper-wrapper,.swiper-slide").css("width", "540px");
		$(".wrapper,.index-header,.foot-btn").css("margin", "auto");
		$("body").find(".foot-btn,.spec-none,.details-share-box").css({ "width": "540px", "left": (bodywidth / 2 - 270) + 'px' });
		$("body").find(".savecode-box,.httpcode-box").css({ "width": "378px", "left": (bodywidth / 2 - 270 + 81) + 'px', 'margin-left': '0' });
		$("body").find("#mdatetimer").css({ "width": "540px", "left": (bodywidth / 2 - 270) + 'px' });
		$("body").find(".wx-alert").css({ "width": "540px", "left": (bodywidth / 2 - 270) + 'px' });
		$("body").find(".alertbox").css({ "width": "432px", "left": (bodywidth / 2 - 270 + 54) + 'px' });
		$("body").find(".sign-alert").css({ "width": "432px", "left": (bodywidth / 2 - 270 + 54) + 'px' });
		$("body").find('#alertbox').children('.address-remind').css({ "width": "auto", "left": (bodywidth / 2 - 270 + (540 - remingW) / 2) + 'px' });
		$("body").find('.nav-list').css({ 'width': '10rem', 'right': (bodywidth / 2 - 270 + 10) + 'px' });
		$("body").find('#searchBox').css({ 'width': '510px', 'left': (bodywidth / 2 - 270 + 10) + 'px' });
		//$("body").find(".address-remind").css({"width":"216px","left":(bodywidth/2-270+162)+'px'});
	}
	return true;
}

function getnoticenum() {
	var noticeurl = ApiUrl + '/notice/only_notice_count';
	getdata(noticeurl, { key: key }, function(result) {
		noticenum = parseInt(result.data['count']) || 0;
		if(noticenum > 0) {
			$('.head-more').addClass('head-moreimgred');
			$('.navnews').find('.basket-have').html(noticenum);
		} else {
			$('.navnews').find('.basket-have').hide();
		}
	});
}

/* 补全小数点 */
function returnFloat(value) {
	var value = Math.round(parseFloat(value) * 100) / 100;
	var xsd = value.toString().split(".");
	if(xsd.length == 1) {
		value = value.toString() + ".00";
		return value;
	}
	if(xsd.length > 1) {
		if(xsd[1].length < 2) {
			value = value.toString() + "0";
		}
		return value;
	}
}

/* 判断商品数量是否为1 */
function numAddClass(inp, maxnum) {
	var val = inp.val();
	maxnum = maxnum || 99;
	inp.parents('.jia-jian').children('span').children('i').removeClass("hxwx-gray");
	inp.parents('.jia-jian').children('span').removeClass("num-small");
	inp.parents('.jia-jian').children('span').removeClass("num-big");
	if(val <= 1) {
		inp.parent('div').prev("span").addClass("num-small");
		inp.parent('div').prev("span").children("i").addClass("hxwx-gray");
	} else if(val >= maxnum) {
		inp.parent('div').next("span").addClass("num-big");
		inp.parent('div').next("span").children("i").addClass("hxwx-gray");
	}
}

/* 获取购物车数量 */
function getbasket() {
	var sum = 0;
	$('.sumber').each(function() {
		var hid = $(this).parents().siblings("input['type'=hidden]").val();
		var label = $(this).parents().find('.text_box');
		$(this).html((parseFloat(hid) * 100) * parseInt(label.val()) / 100);
		var num = parseFloat($(this).html());
		if(isNaN(num)) {
			num = 0;
		}
		sum = sum + num;
		$('#sumprice').html(returnFloat(sum));
	});
	$('.text_box').each(function() {
		numAddClass($(this));
	})
}

//整站字体切换
function fontSizeSet() {
	var aa = window.localStorage ? localStorage.getItem("fontSetSave") : Cookie.read("fontSetSave");
	if(aa == "0") {
		$(".checkFont a").addClass("enabled");
		$("html,body").css("font-size", "75%");
	} else {
		$("html,body").css("");
		$(".checkFont a").removeClass("enabled");
	}
}

//判断字符长度
function judgeuser(name, msg, maxlen) {
	msg = msg || "昵称不能超过七位！"; //提示信息
	maxlen = maxlen || 14; //最大长度
	var len = 0; //计算长度的变量
	var ret = true; //返回值
	var val = name.val(); //需要检测的元素的值
	var newval = ''; //初始化超长的字符串
	for(var i = 0; i < val.length; i++) {
		if(val.charCodeAt(i) > 127 || val.charCodeAt(i) == 94) {
			len += 2;
		} else {
			len++;
		}
		if(len > maxlen) {
			shopdz_alert(msg);
			name.val(newval);
			ret = false;
			break;
		}
		newval += val[i];
	}
	return ret;
}

//-----------------------左侧无缝滚动-----------------------
function mBox() {
	var speed = 30; //数字越大速度越慢
	var tab = document.getElementById("mBox");
	var tab1 = document.getElementById("mL");
	if (tab1!=null) {
		var tab2 = document.getElementById("mLCopy");
		$("#mBox").width($("#mBox").parent().width());
		tab2.innerHTML = tab1.innerHTML;
		function Marquee() {
			if(tab2.offsetWidth - tab.scrollLeft <= 0){
				tab.scrollLeft -= tab1.offsetWidth
			}
			else {
				tab.scrollLeft++;
			}
		}
		var MyMar = setInterval(Marquee, speed);
		tab.onmouseover = function() { clearInterval(MyMar) };
		tab.onmouseout = function() { MyMar = setInterval(Marquee, speed) };
		$("#closeMbox").click(function(){
			$(this).parent().hide()
		});
	}
}
//-----------------------左侧无缝滚动结束-----------------------
//-----------------------获取网址参数-----------------------
function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }
$(function() {
	$(".icon-fenlei").click(function(){
		if(document.body.clientWidth<540){ 
			$(".cover").css("width","100%");
			$(".classify").css({"width":"85%","left":"-85%"});
			$(".classify").animate({left:"0"});
			$('.wrapper').css('overflow-y','hidden');
		} else {
			$(".classify").css("left",(document.body.clientWidth/2-729)+'px');
			$(".cover").css("width","540px");
			$(".classify").animate({left:(document.body.clientWidth/2-270)+'px'});
			$(".cover").css("left",(document.body.clientWidth/2-270)+'px')
			$(".classify").css("width","459px");
		}
			$(".cover").show();
	})
	$(document).on('click', '.cover', function() {
		$(".classify").animate({left:"-85%"});
		$(".cover").hide();
	})
	//字体大小切换
	$(document).on('click', '.checkFont a', function() {
		//var fontSet = $(this).val();
		$(this).toggleClass("enabled");
		//$(".fontCheck label").removeClass("check");
		if($(this).is('.enabled')) {
			fontSet = 0;
			$("html,body").css("font-size", "80%");
			$(this).parent().addClass("check");
		} else {
			fontSet = 1;
			$("html,body").css("font-size", "");
			$(this).parent().addClass("check");
		}

		if(window.localStorage) {
			localStorage.setItem("fontSetSave", fontSet);
		} else {
			Cookie.write("fontSetSave", fontSet);
		}
	})

	//搜索框显示
	$(document).on('click', '.searchmore', function(e) {
		if($(".nav-list").css("display") == "none") {
			$(".nav-list").fadeIn();
		} else {
			$(".nav-list").fadeOut();
		}
		var ev = e || event;
		ev.stopPropagation();
	});

	//$(":not(.searchmore,#searchBox)", document).click(function(){ if($("#searchBox").css('display')=='block'){ $("#searchBox").fadeOut(); } }); 
	//二级菜单显示
	$(document).on('click', '.head-more', function(e) {
		if($(".nav-list").css("display") == "none") {
			$(".nav-list").fadeIn();
		} else {
			$(".nav-list").fadeOut();
		}
		var ev = e || event;
		ev.stopPropagation();
	});
	$(":not(.head-more)", document).click(function() { if($(".nav-list").css('display') == 'block') { $(".nav-list").fadeOut(); } }); 
	goTopEx();
	bindcart();
	initPage();
	fontSizeSet();
})