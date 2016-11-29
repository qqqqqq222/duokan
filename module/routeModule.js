/**
 * Created by Administrator on 2016/11/8.
 */

var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/quickNav',{
            templateUrl:'../resource/nav.html',
            controller:'navCtrl'
        })
        .when('/searchBook',{
            templateUrl:'../resource/nav.html',
            controller:'searchBookCtrl'
        })
        .otherwise({
            redirectTo:'sale.html'
        })
}])


app.controller('navCtrl',navController)
   .controller('searchBookCtrl',searchBookController)
