var myDiv = angular.module("myapp", ['ui.router']);
		myDiv.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
				//路由重定向$urlRouterProvider
	$urlRouterProvider.otherwise('shouye');
			$stateProvider
				.state("shou", {
					url: 'shou',
					views: {
						"body": {
							templateUrl: "denglu1.html"
						}
					}
				})
			.state("fan", {
				url: 'fan',
				views: {
					"body": {
						templateUrl: "shoye.html"
					}
				}
			})
				.state("wangjimima", {
				url: 'wangjimima',
				views: {
					"body": {
						templateUrl: "mimachongzhi.html"
					}
				}
			})
				.state("help", {
				url: 'help',
				views: {
					"body": {
						templateUrl: "dianpuzhuangxiu.html"
					}
				}
			})
				.state("add", {
				url: 'add',
				views: {
					"body": {
						templateUrl: "zhuce.html"
					}
				}
			})
				.state("dian", {
				url: 'dian',
				views: {
					"body": {
						templateUrl: "pinglunguanli.html"
					}
				}
			})
					.state("state", {
				url: 'state',
				views: {
					"body": {
						templateUrl: "dianpuzhuangxiu2.html"
					}
				}
			})
			
   }]);