var app = angular.module('homepage', ['ngRoute', 'viewhead']);

app.controller('mainController', function($scope) {

});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when(
        '/',
        {
            templateUrl: '/pages/home.html'
        }
    );
    $routeProvider.when(
        '/projects',
        {
            templateUrl: '/pages/projects.html'
        }
    );
    $routeProvider.when(
        '/about',
        {
            templateUrl: '/pages/about.html'
        }
    );
    $routeProvider.when(
        '/links',
        {
            templateUrl: '/pages/links.html'
        }
    );
    $routeProvider.when(
        '/400',
        {
            templateUrl: '/pages/400.html'
        }
    );
    $routeProvider.when(
        '/401',
        {
            templateUrl: '/pages/401.html'
        }
    );
    $routeProvider.when(
        '/403',
        {
            templateUrl: '/pages/403.html'
        }
    );
    $routeProvider.when(
        '/404',
        {
            templateUrl: '/pages/404.html'
        }
    );
    $routeProvider.when(
        '/500',
        {
            templateUrl: '/pages/500.html'
        }
    );
    $routeProvider.otherwise(
        {
            redirectTo: '/'
        }
    );
    $locationProvider.html5Mode(true).hashPrefix('!');
});
