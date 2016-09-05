angular.module('InfobipContentCard', [])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/dashboard', {
            templateUrl: 'app/Templates/dashboardTemplate.html',
            controller: 'dashboardController'
        }).
        otherwise({
            redirectTo: '/dashboard'
        });
    }
]);