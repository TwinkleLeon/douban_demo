angular.module("myJsonp",[]).service("Jsonp",["$window",function(a){this.jsonp=function(n){var r=n.url+"?";for(var c in n.params)r+=c+"="+n.params[c]+"&";var e="callback"+a.parseInt(1e3*a.Math.random());a[e]=n.callback,r+="callback="+e;var o=document.createElement("script");o.src=r,document.body.appendChild(o)}}]);