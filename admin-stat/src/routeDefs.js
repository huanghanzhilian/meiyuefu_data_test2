/**
 * routeDefs.js 路由定义
 * @description 该app为SPA，single page application
 * 路由完全有前端控制，此处配置**路由**
 */
define(['app'], function(app) {
    /**
     * register `routeDefs`
     *
     */

    app.registerProvider('routeDefs', [
        '$stateProvider',//状态
        '$urlRouterProvider',//url路由
        '$couchPotatoProvider',
        function($stateProvider, $urlRouterProvider, $couchPotatoProvider) {
            this.$get = function() {
                // this is a config-time-only provider
                // in a future sample it will expose runtime information to the app
                // /这是一个只提供配置时间的提供者
                // 在将来的示例中，它将向应用程序公开运行时信息
                return {};
            };
            // $locationProvider.html5Mode(true);

            //路由和配置不匹配时使用welcome锚链接
            $urlRouterProvider.otherwise('welcome');

            // a uniform empty tpl for inherit
            var emptyTplInherit = '/static-huang/empty-tpl-inherit.html';

            //stateProvider根据路由状态
            $stateProvider.state('welcome', {
                url: '/welcome',//找welcome代码片段  url就是路由地址
                templateUrl: function(stateParams){   //模板片段
                    return '/static-huang/welcome/welcome.html';
                }
            })

                 //合作伙伴详情
                .state('company', {
                    url: '/company',
                    // abstract: true 表明此状态不能被显性激活，只能被子状态隐性激活
                    // 就是指设置这个界面为母版界面，可以这么理解，这是一个架子，所有的子界面都有这个统一的界面。
                    abstract: true,
                    templateUrl: emptyTplInherit
                }).state('company.list', {
                    url: '?companyKey&cityKey&pageNum',
                    templateUrl: '/static-huang/company/company.html',
                    controller: 'CtrlCompany',//控制器名称
                    resolve: {//控制器的路径
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-huang/company/company.js'])
                    }
                })
                .state('company.add', {
                    url: '/add',  // URL就是"/company/add"
                    templateUrl: '/static-huang/company-detail/company-detail.html',
                    controller: 'CtrlCompanyDetail',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-huang/company-detail/company-detail.js'])
                    }
                })
                .state('company.detail', {
                    url: '/{companyId:[0-9]+}?type',
                    templateUrl: '/static-huang/company-detail/company-detail.html',
                    controller: 'CtrlCompanyDetail',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-huang/company-detail/company-detail.js'])
                    }
                })
                .state('roomAdminListl', {
                    url: '/roomAdminListl?pageNum',
                    templateUrl: '/static-huang/roomAdminListl/roomAdminListl.html',
                    controller: 'roomAdminListl',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-huang/roomAdminListl/roomAdminListl.js'])
                    }
                })
                .state('OutlierDetection', {
                    url: '/OutlierDetection?pageNum',
                    templateUrl: '/static-huang/OutlierDetection/OutlierDetection.html',
                    controller: 'CtrlOutlierDetection',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-huang/OutlierDetection/OutlierDetection.js'])
                    }
                })
                .state('Riskmigration', {
                    url: '/Riskmigration?pageNum',
                    templateUrl: '/static-huang/Riskmigration/Riskmigration.html',
                    controller: 'CtrlRiskmigration',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-huang/Riskmigration/Riskmigration.js'])
                    }
                })
                .state('RelationalAnomaly', {
                    url: '/RelationalAnomaly?id&filtername&graphLevel',
                    templateUrl: '/static-huang/RelationalAnomaly/RelationalAnomaly.html',
                    controller: 'RelationalAnomaly',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-huang/RelationalAnomaly/RelationalAnomaly.js'])
                    }
                })

        }
    ]);
    //end for define
});