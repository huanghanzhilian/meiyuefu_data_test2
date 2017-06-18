/**
 * CtrlHome.js 首页控制器
 * @url /#/home
 * @author yuebin
 */

define([
'app',
'directive/jrDatepicker',
'directive/jrDropdownButton',
'directive/jrPlaceholder'
], function ( app) {
    app.registerController('roomAdminListl', ['$scope','$rootScope', '$http', '$modal', '$state', '$stateParams', '$filter','FileUploader',
    function ($scope,$rootScope, $http, $modal, $state, $stateParams, $filter,FileUploader) {


        $scope.queryParams = $.extend({
            pageNum: 1,
            querySize:10
        }, $stateParams);

        $scope.queryOptions = {
            isvalid: [
                {name: '全部',value: ''},
                {name: '在职',value: '1'},
                {name: '离职',value: '0'},
            ],
            companyStatus: [
                {value: '', name: '是否合作'},
                {value: '1', name: '合作中'},
                {value: '0', name: '合作终止'}
            ],
            showSubCompany:[
                {value: '', name: '是否显示子公司'},
                {value: '0', name: '不显示'},
                {value: '1', name: '显示'}
            ]
        };

        $scope.orders = {
            pageNum: 1
        };

        function getData(params) {
            $http.get('/com/manage/getAgentList', {
                params: $.extend({}, params, {optDesc: '合作伙伴列表'})
            }).success(function(data, status, headers, config) {
                console.log(data)
                $scope.orders = data.object;
            });
        };

        getData($scope.queryParams);

        $scope.addCompany = function(event) {
            window.open("#/company/add")
        };
        $scope.search = function(event) {
            $scope.queryParams.pageNum = 1;
            getData($scope.queryParams)
        };

        //查询
        $scope.fisuy=function(){
            console.log($scope.queryParams)
        }

        //清空查询项
        $scope.clearParams = function() {
            var pageSize = $scope.queryParams.pageSize;
            $scope.queryParams = {
                pageNum: 1,
                pageSize: pageSize
            }
            console.log($scope.queryParams)
        }


        // 查看
        $scope.look = function(event,order) {
            console.log(order)
            _czc.logSend("房管员列表", "查看");
            var modalModify = $modal.open({
                template: __inline('tpl/modal-look.html'),
                controller: 'ModalLook',
                backdrop: 'static',
                resolve: {
                    order: function () {
                        return angular.copy(order);
                    }
                }
            });

            modalModify.result.then(function () {
                $state.reload();
            });
        };
        app.registerController('ModalLook', function ($rootScope, $scope, $modalInstance, order) {
            $scope.data = order;
        });

        // 修改
        $scope.modify = function(event,order) {
            _czc.logSend("房管员列表", "修改");
            var modalModify = $modal.open({
                template: __inline('tpl/modal-modify.html'),
                controller: 'ModalModify',
                backdrop: 'static',
                resolve: {
                    order: function () {
                        return angular.copy(order);
                    }
                }
            });

            modalModify.result.then(function () {
                $state.reload();
            });
        };

        app.registerController('ModalModify', function ($rootScope, $scope, $modalInstance, order) {

            $scope.queryOptions = {
                isOnWork: [
                    {name: '在职',value: '1'},
                    {name: '离职',value: '2'}
                ]
            };

            $scope.appTestCompany = $rootScope.userInfo.appTestCompany;

            $scope.data = order;

            if($scope.data.isOnWork == "离职") {
                $scope.data.isOnWork = "2";
            } else if($scope.data.isOnWork == "在职") {
                $scope.data.isOnWork = "1";
            }

            $scope.submit = function () {
                $scope.errorInfo = '';

                if (!$scope.data.agentName) {
                    $scope.errorInfo = '姓名不能为空';
                    return false;
                } else if (!$scope.data.agentName.match(/^[\u4e00-\u9fa5·]{2,20}$/)) {
                    $scope.errorInfo = '请填写正确的中文姓名';
                    return false;
                }

                if (!$scope.data.agentPhone) {
                    $scope.errorInfo = '手机号不能为空';
                    return false;
                } else if (!$scope.data.agentPhone.match(/^1\d{10}$/)) {
                    $scope.errorInfo = '请填写正确的手机号码，如：138********';
                    return false;
                }

                if (!$scope.data.agentIdCardText) {
                    $scope.errorInfo = '身份证号不能为空';
                    return false;
                } else if (!$scope.data.agentIdCardText.match(/^[1-9]\d{16}(\d|x|X)$/)) {
                    $scope.errorInfo = '请填写正确的身份证号码';
                    return false;
                }

                if (!$scope.data.wbUserName && ($scope.appTestCompany == 0)) {
                    $scope.errorInfo = '58账号不能为空';
                    return false;
                }

                if (!$scope.data.agentEnterprise) {
                    $scope.errorInfo = '分店不能为空';
                    return false;
                }

                $scope.data.optDesc="修改房管员信息"
                $scope.data.agentId = $scope.data.id;

                $http.post('/com/manage/updateAgent', $.param($scope.data)).success(function(data, status, headers, config) {
                    if(data.success) {
                        $modalInstance.close();
                    }

                });
            };
        });





        /**
         * 翻页跳转
         */
        $scope.$watch('orders.pageNum', function(newValue, oldValue) {
            if (newValue === oldValue) {
                return false;
            }
            $scope.queryParams.pageNum = newValue;
            getData($scope.queryParams)
        });

        $scope.$watch('orders.pageSize', function(newValue, oldValue) {
            if (newValue === oldValue) {
                return false;
            }
            $scope.queryParams.pageSize = newValue;
            getData($scope.queryParams)
        });

    }]);
});
