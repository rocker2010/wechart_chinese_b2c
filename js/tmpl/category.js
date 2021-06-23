/*
 * designby:liuwz
 * design date:2017/04/17
 */
$(function() {

    $(document).ready(function(e) {
        SidebarTabHandler.Init();
    });
    var SidebarTabHandler={
        Init:function(){
            $(document).on('click','.tabItemContainer>li',function(){
                $(".tabItemContainer>li>a").removeClass("tabItemCurrent");
                $(".tabBodyItem").removeClass("tabBodyCurrent");
                $(this).find("a").addClass("tabItemCurrent");
                $($(".tabBodyItem")[$(this).index()]).addClass("tabBodyCurrent");
            });
        }
    }

    function tabImg(){
        var tabImgW=$(".tab-img").width();
        $(".tab-img").height(tabImgW);
    }
//  tabImg();

    var myScroll;
    function loaded() {
        myScroll = new iScroll('tabItemCon,tabBodyCon');
    }
});
