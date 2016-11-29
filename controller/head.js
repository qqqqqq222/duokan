/**
 * Created by Administrator on 2016/11/9.
 */

var app = angular.module('myApp',['ngRoute']);

app
    .controller('menuCtrl',function($scope,$element){
        var menu = $element.children().eq(0);
        console.log(menu)
        menu.click(function(){
            $scope.flag = !flag;
            return flag;
        })
    })
    .controller('searchCtrl',function($scope,$element){
        var booklist = $element.children().eq(0);
        console.log(booklist)
    })