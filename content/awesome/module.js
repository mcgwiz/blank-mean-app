;(function () {
    angular.module("awesome", ["ui-router"/* , "awesome.crud" */])

    angular.module("awesome").config(RouteConfig)

    RouteConfig.$inject = [
        '$urlRouterProvider',
        '$locationProvider'
    ]

    function RouteConfig($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/')
        $locationProvider.html5Mode(true)
    }
})()

;(function () {
    angular.module("awesome").config(RouteConfig);

      RouteConfig.$inject = ["$stateProvider"]

    function RouteConfig($stateProvider) {
        $stateProvider
            .state("awesome", {
                url: '/',
                views: {
                    root: {
                        templateUrl: 'awesome/something.html'
                    }
                }
            })
            .state("awesome.example", {
                url: '/example',
                views: {
                    somethingContent: {
                        template: "<p>More stuff</p>"
                    }
                }
            })
    }
})()