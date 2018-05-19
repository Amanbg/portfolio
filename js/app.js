angular
    .module('app', [
        'ui.router',
        'app.controllers',
        'ngAnimate',
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$sceDelegateProvider', function(
        $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $sceDelegateProvider) {
        $stateProvider
            .state('k', {
                url: '/',
                views: {
                    'mainContent': {
                        'templateUrl': 'views/main/portfolio.html'
                    },
                    'footer': {
                        'templateUrl': 'views/footer/footer.html'
                    }
                }
            })
        $urlRouterProvider.otherwise('/')
    }])
    .run(['$state', function($state) {

    }])