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
], function(app) {
    app.registerController('CtrlCompany', ['$scope', '$rootScope', '$http', '$modal', '$state', '$stateParams', '$filter', 'FileUploader',
        function($scope, $rootScope, $http, $modal, $state, $stateParams, $filter, FileUploader) {
            /**
             * 设置数据模型queryParams/查询参数
             * pageNum/页数 1
             * querySize/查询长度 10
             */
            $scope.queryParams = $.extend({
                pageNum: 1,
                querySize: 10
            }, $stateParams);



            /**
             * queryOptions/查询选项
             * companyStatus/公司现状 companyStatus apply
             * showSubCompany/显示单位
             */
            $scope.queryOptions = {
                companyStatus: [{
                    value: '',
                    name: '是否合作'
                }, {
                    value: '1',
                    name: '合作中'
                }, {
                    value: '0',
                    name: '合作终止'
                }],
                showSubCompany: [{
                    value: '',
                    name: '是否显示子公司'
                }, {
                    value: '0',
                    name: '不显示'
                }, {
                    value: '1',
                    name: '显示'
                }]
            };

            /**
             * orders/订单
             * @type {Object}
             * pageNum/页数 1
             */
            $scope.orders = {
                pageNum: 1
            };


            /**
             * [getData description]
             * @param  {[type]} params [description]
             * @return {[type]}        [description]
             * 定义获取数据方法
             *
             */

            function getData(params) {
                $http.get('/com/company/json/get/getCompanyPage', {
                    params: $.extend({}, params, {
                        optDesc: '合作伙伴列表'
                    })
                }).success(function(data, status, headers, config) {
                    $scope.orders = data.object;
                });
            };

            //默认初始化运行  数据模型改动渲染视图
            getData($scope.queryParams);

            //add 添加方法 打开新窗口加路由
            $scope.addCompany = function(event) {
                window.open("#/company/add")
            };
            $scope.search = function(event) {
                $scope.queryParams.pageNum = 1;
                getData($scope.queryParams)
            };

            //清空查询项
            $scope.clearParams = function() {
                var pageSize = $scope.queryParams.pageSize;
                $scope.queryParams = {
                    pageNum: 1,
                    pageSize: pageSize
                }
                console.log($scope.queryParams)
            }

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

        }
    ]);
});