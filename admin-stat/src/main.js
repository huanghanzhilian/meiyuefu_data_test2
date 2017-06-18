//require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。
require.config({
    waitSeconds : 0,//等待启动时间
    baseUrl: '/static-huang/',//基于哪个目录   改变基目录（baseUrl）
    paths: {
        'angular': 'dep/angularjs_1.5/angular',
        'angular-ui-router': 'dep/angular-ui-router_0.2.15/angular-ui-router.min',
        'angular-ui-bootstrap': 'dep/angular-bootstrap_0.10.0/ui-bootstrap-tpls',
        'angular-uib-bootstrap': 'dep/angular-bootstrap_2.1.2/ui-bootstrap-tpls-2.1.2',
        'angular-couch-potato': 'dep/angular-couch-potato_0.1.1/angular-couch-potato.min',
        'angular-loading-bar': 'dep/angular-loading-bar_0.6.0/loading-bar.min',
        'angular-upload-file':'dep/angular-upload-file/angular-file-upload.min',
        'angular-multi-select': 'dep/angular-multi-select/isteven-multi-select',
        'echarts' : 'dep/echarts_3.0/echarts.min',
        'echarts/chart/pie' : 'dep/echarts_2.0.4/echarts',
        'echarts/chart/funnel' : 'dep/echarts_2.0.4/echarts',
        'echarts/chart/line' : 'dep/echarts_2.0.4/echarts',
        'echarts/chart/bar' : 'dep/echarts_2.0.4/echarts',
        'echarts/chart/gauge' : 'dep/echarts_2.0.4/echarts',
        'echarts/chart/china' : 'dep/echarts_3.0/china',
        'echarts/theme/macarons' : 'dep/echarts-theme/macarons.min',
        'echarts/theme/blue' : 'dep/echarts-theme/macarons.min',
        //'angular-ui-grid': 'dep/angular-ui-grid/ui-grid',
        'directive': '_directive',
        'filter': '_filter',
        'model': '_model',
        'service': '_service',
        'dict.cities': '_directive/dict.cities'
    },
    shim: {//shim属性，专门用来配置不兼容的模块。
        'angular': {
            exports: 'angular'//每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；
        },
        'angular-couch-potato': {
            deps:['angular']//2）deps数组，表明该模块的依赖性。
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-ui-bootstrap': {
            deps: ['angular']
        },
        'angular-uib-bootstrap': {
            deps: ['angular']
        },
        'angular-loading-bar': {
            deps: ['angular']
        },
        'angular-upload-file':{
            deps: ['angular']
        },
        'angular-multi-select': {
            deps: ['angular']
        }
        //,'angular-ui-grid': {
        //    deps: ['angular']
        //}
    }
});

require(['app', 'angular', 'app-init'], function(app, angular) {
    // console.log(app)

    // 页面加载完成后,再加载模块
    angular.element(document).ready(function() {
        //angular中如何手动加载模块。需要使用到angular.bootstrap这个函数。
        angular.bootstrap(document, [app['name'], function() {


            // for good measure, put ng-app on the html element
            // studiously avoiding jQuery because angularjs.org says we shouldn't
            // use it.  In real life, there are a ton of reasons to use it.
            // karma likes to have ng-app on the html element when using requirejs.
            angular.element(document).find('html').addClass('ng-app');

        }]);

    });

});