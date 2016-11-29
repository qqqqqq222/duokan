/**
 * Created by Administrator on 2016/11/8.
 */

$(function(){

    $("input").attr("style","outline:none");

    //*****index.html搜索关闭按钮
    searchClose();

    //********快速导航关闭隐藏切换
        $(".a-quicknav").click(function(){
            if($(".navct-wrap").css("display") == "none"){
                $(".navct-wrap").css("display","block");
            }else{
                $(".navct-wrap").css("display","none");
            }
        })


    //*****login.html登录验证
    login();
    login_success();
})























