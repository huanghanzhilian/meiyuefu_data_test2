$.modalAlert=function(message,callback){$(".http-modal, .http-modal-backdrop").off().remove();var $modal=$('<div tabindex="-1" class="http-modal modal fade ngAlert in" ng-class="{in: animate}" style="z-index: 1050; display: block;"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">\r\n    <a href="javascript:void(0)" class="modal-close"></a>\r\n    <h3 class="modal-title">提示信息</h3>\r\n</div>\r\n<div class="modal-body">'+message+'</div>\r\n<div class="modal-footer">\r\n    <button class="btn btn-primary">确定</button>\r\n</div></div></div></div>'),$backdrop=$('<div class="modal-backdrop http-modal-backdrop in" style="z-index: 1040;"></div>');$modal.appendTo($("body")),$backdrop.appendTo($("body")),$modal.fadeIn(500),$modal.on("click",".modal-close, .btn-primary",function(){$modal.off().remove(),$backdrop.remove(),callback&&callback()})},$.modalConfirm=function(message,callback){$(".http-modal, .http-modal-backdrop").off().remove();var $modal=$('<div tabindex="-1" class="http-modal modal fade ngAlert in" ng-class="{in: animate}" style="z-index: 1050; display: block;"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">\r\n    <a href="javascript:void(0)" class="modal-close"></a>\r\n    <h3 class="modal-title">确认信息</h3>\r\n</div>\r\n<div class="modal-body">'+message+'</div>\r\n<div class="modal-footer">\r\n    <button class="btn btn-primary">确定</button>\r\n<button class="btn btn-cancel">取消</button>\r\n</div></div></div></div>'),$backdrop=$('<div class="modal-backdrop http-modal-backdrop in" style="z-index: 1040;"></div>');$modal.appendTo($("body")),$backdrop.appendTo($("body")),$modal.fadeIn(500),$modal.on("click",".modal-close, .btn-cancel",function(){$modal.off().remove(),$backdrop.remove()}),$modal.on("click",".btn-primary",function(){$modal.off().remove(),$backdrop.remove(),callback&&callback()})},define(["angular","angular-couch-potato","angular-ui-router","angular-upload-file","angular-ui-bootstrap","angular-uib-bootstrap","angular-loading-bar","angular-multi-select"],function(angular,couchPotato){var app=angular.module("app",["scs.couch-potato","ui.router","ui.bootstrap","ui.bootstrap.tpls","uib.bootstrap","uib.bootstrap.tpls","chieffancypants.loadingBar","angularFileUpload","isteven-multi-select"]);return app.config(["datepickerConfig","datepickerPopupConfig","uibDatepickerPopupConfig","paginationConfig","cfpLoadingBarProvider",function(datepickerConfig,datepickerPopupConfig,uibDatepickerPopupConfig,paginationConfig,cfpLoadingBarProvider){datepickerConfig.showWeeks=!1,datepickerConfig.startingDay=1,datepickerConfig.dayTitleFormat="yyyy年MMMM",datepickerPopupConfig.showButtonBar=!1,uibDatepickerPopupConfig.showButtonBar=!0,uibDatepickerPopupConfig.clearText="清空",uibDatepickerPopupConfig.closeText="关闭",uibDatepickerPopupConfig.currentText="今天",paginationConfig.maxSize=5,paginationConfig.boundaryLinks=!0,paginationConfig.itemsPerPage=10,paginationConfig.previousText="‹",paginationConfig.nextText="›",paginationConfig.firstText="«",paginationConfig.lastText="»",cfpLoadingBarProvider.includeSpinner=!1}]),couchPotato.configureApp(app),app});