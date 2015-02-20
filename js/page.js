var app = angular.module('homepage', ['ngRoute', 'viewhead']);

app.controller('mainController', function($scope) {

});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when(
        '/',
        {
            templateUrl: '/home.html'
        }
    );
    $routeProvider.when(
        '/projects',
        {
            templateUrl: '/projects.html'
        }
    );
    $routeProvider.when(
        '/about',
        {
            templateUrl: '/about.html'
        }
    );
    $routeProvider.when(
        '/links',
        {
            templateUrl: '/links.html'
        }
    );
    $routeProvider.when(
        '/400',
        {
            templateUrl: '/400.html'
        }
    );
    $routeProvider.when(
        '/401',
        {
            templateUrl: '/401.html'
        }
    );
    $routeProvider.when(
        '/403',
        {
            templateUrl: '/403.html'
        }
    );
    $routeProvider.when(
        '/404',
        {
            templateUrl: '/404.html'
        }
    );
    $routeProvider.when(
        '/500',
        {
            templateUrl: '/500.html'
        }
    );
    $routeProvider.otherwise(
        {
            redirectTo: '/404'
        }
    );
    $locationProvider.html5Mode(true);
});
