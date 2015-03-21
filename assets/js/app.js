var app = angular.module('PavanApp', ['ngRoute', 'ngAnimate']);


app.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {

        $rootScope.isRouteLoading = true;
    });

    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.isRouteLoading = false;
    });
}]);

app.config(['$routeProvider', function ($routeProvider) {


    $routeProvider

        .when('/', {
            templateUrl: 'partials/home.html'
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html'
        }).when('/blog', {
            templateUrl: 'partials/blog.html'
        }).when('/portfolio', {
            templateUrl: 'partials/portfolio.html'
        }).when('/resume', {
            templateUrl: 'partials/resume.html'
        })
        .otherwise({redirectTo: '/'});
}]);


app.factory('Color', function () {
    function shadeColor(color, percent) {

        var R = parseInt(color.substring(1, 3), 16);
        var G = parseInt(color.substring(3, 5), 16);
        var B = parseInt(color.substring(5, 7), 16);

        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);

        R = (R < 255) ? R : 255;
        G = (G < 255) ? G : 255;
        B = (B < 255) ? B : 255;

        var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
        var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
        var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

        return "#" + RR + GG + BB;
    }

    return {
        shade: shadeColor
    }
});


app.controller('mainController', function ($scope, $interval, Color) {

    $scope.colors = ['#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e74c3c', '#95a5a6'];

    $scope.init = function () {

        $scope.theme = {
            bg: {
                'background': $scope.colors[$scope.colors.length - 1],
                'transition': 'background-color linear 1s'
            },
            br: {
                'border-color': $scope.colors[$scope.colors.length - 1]
            },
            cr: {
                'color': $scope.colors[$scope.colors.length - 1]
            },
            bgdark: {
                'background': Color.shade($scope.colors[$scope.colors.length - 1], -20),
                'transition': 'background-color linear 1s'
            },
            brdark: {
                'border-color': Color.shade($scope.colors[$scope.colors.length - 1], -20)
            },
            crdark: {
                'color': Color.shade($scope.colors[$scope.colors.length - 1], -20)
            },
            bglight: {
                'background': Color.shade($scope.colors[$scope.colors.length - 1], 75),
                'transition': 'background-color linear 1s'
            },
            brlight: {
                'border-color': Color.shade($scope.colors[$scope.colors.length - 1], 75)
            },
            crlight: {
                'color': Color.shade($scope.colors[$scope.colors.length - 1], 75)
            }
        }
    };


    $interval(function (count) {
        var no = count % $scope.colors.length;


        $scope.theme = {
            bg: {
                'background': $scope.colors[no],
                'transition': 'all linear 1.5s'
            },
            br: {
                'border-color': $scope.colors[no]
            },
            cr: {
                'color': $scope.colors[no]
            },
            bgdark: {
                'background': Color.shade($scope.colors[no], -20),
                'transition': 'background-color linear 1.5s'
            },
            brdark: {
                'border-color': Color.shade($scope.colors[no], -20)
            },
            crdark: {
                'color': Color.shade($scope.colors[no], -20)
            },
            bglight: {
                'background': Color.shade($scope.colors[no], 75),
                'transition': 'background-color linear 1.5s'
            },
            brlight: {
                'border-color': Color.shade($scope.colors[no], 75)
            },
            crlight: {
                'color': Color.shade($scope.colors[no], 75)
            }
        }
    }, 10000);


});
