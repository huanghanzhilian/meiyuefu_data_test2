define(["app"],function(app){app.registerProvider("routeDefs",["$stateProvider","$urlRouterProvider","$couchPotatoProvider",function($stateProvider,$urlRouterProvider,$couchPotatoProvider){this.$get=function(){return{}},$urlRouterProvider.otherwise("welcome");var emptyTplInherit="/static-huang/empty-tpl-inherit.html";$stateProvider.state("welcome",{url:"/welcome",templateUrl:function(){return"/static-huang/welcome/welcome.html"}}).state("company",{url:"/company","abstract":!0,templateUrl:emptyTplInherit}).state("company.list",{url:"?companyKey&cityKey&pageNum",templateUrl:"/static-huang/company/company.html",controller:"CtrlCompany",resolve:{ctrl:$couchPotatoProvider.resolveDependencies(["/static-huang/company/company.js"])}}).state("company.add",{url:"/add",templateUrl:"/static-huang/company-detail/company-detail.html",controller:"CtrlCompanyDetail",resolve:{ctrl:$couchPotatoProvider.resolveDependencies(["/static-huang/company-detail/company-detail.js"])}}).state("company.detail",{url:"/{companyId:[0-9]+}?type",templateUrl:"/static-huang/company-detail/company-detail.html",controller:"CtrlCompanyDetail",resolve:{ctrl:$couchPotatoProvider.resolveDependencies(["/static-huang/company-detail/company-detail.js"])}}).state("roomAdminListl",{url:"/roomAdminListl?pageNum",templateUrl:"/static-huang/roomAdminListl/roomAdminListl.html",controller:"roomAdminListl",resolve:{ctrl:$couchPotatoProvider.resolveDependencies(["/static-huang/roomAdminListl/roomAdminListl.js"])}}).state("OutlierDetection",{url:"/OutlierDetection?pageNum",templateUrl:"/static-huang/OutlierDetection/OutlierDetection.html",controller:"CtrlOutlierDetection",resolve:{ctrl:$couchPotatoProvider.resolveDependencies(["/static-huang/OutlierDetection/OutlierDetection.js"])}}).state("Riskmigration",{url:"/Riskmigration?pageNum",templateUrl:"/static-huang/Riskmigration/Riskmigration.html",controller:"CtrlRiskmigration",resolve:{ctrl:$couchPotatoProvider.resolveDependencies(["/static-huang/Riskmigration/Riskmigration.js"])}}).state("RelationalAnomaly",{url:"/RelationalAnomaly?id&filtername&graphLevel",templateUrl:"/static-huang/RelationalAnomaly/RelationalAnomaly.html",controller:"RelationalAnomaly",resolve:{ctrl:$couchPotatoProvider.resolveDependencies(["/static-huang/RelationalAnomaly/RelationalAnomaly.js"])}})}])});