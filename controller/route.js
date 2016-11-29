/**
 * Created by Administrator on 2016/11/8.
 */


function navController($scope,$element){
    alert("~~~~~~~~~~~~~~~~~~~~~")
/*    var menu = $element.children(".h-menu").eq(0);
    alert(menu)
    menu.click(function(){
        $scope.flag = !flag;
        return flag;
    });*/

    $(".h-menu").click(
        $(".navct").toggle()
    );
}

function searchBookController($scope){

}