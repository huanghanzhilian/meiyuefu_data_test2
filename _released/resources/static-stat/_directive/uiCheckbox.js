define(["app"],function(app){app.registerDirective("uiCheckbox",[function(){return{restrict:"E",replace:!0,transclude:!0,template:'<span class="ui-checkbox" ng-class="{checked: (checked == \'true\')}" ng-click="check($event)"><span></span><input type="checkbox" name="{{name}}" /><i class="icon"></i>{{text}}</span>',scope:{name:"@",text:"@",checked:"@",value:"@",index:"@",data:"=",fdata:"="},link:function($scope,iElement,iAttrs){if(!iAttrs.readonly){var $checkbox=iElement.find("input");if($scope.data){var fdata=[];$scope.data.map(function(item){item.isSelect&&fdata.push(item.value)}),$scope.fdata=fdata.join(",")}$scope.check=function($event){$event.preventDefault(),$scope.checked="true"==$scope.checked?!1:!0,$scope.data[$scope.index].isSelect=$scope.checked,$checkbox.prop("checked",$scope.checked);var fdata=[];$scope.data.map(function(item){item.isSelect&&fdata.push(item.value)}),$scope.fdata=fdata.join(",")}}}}}])});