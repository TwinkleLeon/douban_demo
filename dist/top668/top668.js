!function(t){var o=t.module("top668",[]);o.config(["$routeProvider",function(t){t.when("/top668",{templateUrl:"./top668/top668.html",controller:"top668Ctrl"})}]),o.controller("top668Ctrl",["$scope","Jsonp","$window",function(t,o,a){t.isShow=!0,t.pageIndex=1,t.perCount=10,t.start=(t.pageIndex-1)*t.perCount,o.jsonp({url:"http://api.douban.com/v2/movie/top250",params:{count:t.perCount,start:t.start},callback:function(o){t.totalCount=o.total,t.pageCount=a.Math.ceil(o.total/t.perCount),t.data=o,t.isShow=!1,t.$apply()}}),t.getPage=function(n){t.isShow=!0,0!=t.pageIndex?t.pageIndex!=t.pageCount+1?(t.pageIndex=n,t.start=(t.pageIndex-1)*t.perCount,o.jsonp({url:"http://api.douban.com/v2/movie/top250",params:{count:t.perCount,start:t.start},callback:function(o){t.totalCount=o.total,t.pageCount=a.Math.ceil(o.total/t.perCount),t.data=o,t.isShow=!1,t.$apply()}})):t.pageIndex=t.pageCount:t.pageIndex=1}}])}(angular);