/**
 * Created by Administrator on 2016/11/8.
 */

function searchClose() {

    $(".h-search").click(function () {
        //console.log("search")
        $(".h-search").removeAttr("display").attr("style", "display:none");
        $('.navct').removeAttr("display").attr("style", "display:none");
        $('.u-area').removeAttr("display").attr("style", "display:none");
        $('.ft').removeAttr("display").attr("style", "display:none");

        $('.category-list').removeAttr("display").attr("style", "display:none");

        $('.search-form').removeAttr("display").attr("style", "display:block");

    });

    $(".close").click(function () {
        //console.log("close")
        $('.search-form').removeAttr("display").attr("style", "display:none");

        $(".h-search").removeAttr("display").attr("style", "display:block");
        $('.navct').removeAttr("display").attr("style", "display:block");
        $('.u-area').removeAttr("display").attr("style", "display:block");
        $('.ft').removeAttr("display").attr("style", "display:block");

        $('.category-list').removeAttr("display").attr("style", "display:block");
    });
}

var login_success = function () {

    alert(location.search);

    function getQueryString(name) {
        alert("+++++++++++++++++++");
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            $('.a-login').attr('style', "background-position:0 -124px");
            return decodeURI(r[2]);
        }
        return null;
    }
    alert(GetQueryString("name"));
    alert(GetQueryString("pwd"));


};
