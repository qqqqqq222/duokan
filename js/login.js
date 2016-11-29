/**
 * Created by Administrator on 2016/11/8.
 */

var login = function () {

    var flag;
    $("#submit").click(function () {
        if (($('#uname').val() == "18865502209") && ($('#pwd').val() == "123qaz,./")) {
            $(".log-form").attr("action","../html/index.html?flag=true");
            //flag = true;
        }
        else{
            flag = false;
        }
    });
    return flag;
}
