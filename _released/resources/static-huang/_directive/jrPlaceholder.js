define(["app"],function(app){app.registerDirective("jrPlaceholder",[function(){return{restrict:"A",require:"^ngModel",link:function($scope,element,attrs,ctrl){if("placeholder"in document.createElement("input"))element.attr("placeholder",attrs.jrPlaceholder);else{var value,placehold=function(){element.val(attrs.jrPlaceholder),element.addClass("placeholder-ie")},unplacehold=function(){element.val(""),element.removeClass("placeholder-ie")};$scope.$watch(attrs.ngModel,function(val){value=val||""}),element.on("focus",function(){""===value&&unplacehold()}),element.on("blur",function(){""===element.val()&&placehold()}),ctrl.$formatters.unshift(function(val){return val?val:(placehold(),value="",attrs.jrPlaceholder)})}}}}])});