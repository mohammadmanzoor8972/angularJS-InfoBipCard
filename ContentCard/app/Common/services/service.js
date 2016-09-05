angular
    .module('InfobipContentCard')
    .factory('API', function($rootScope, $http, $window, CONSTANT) {

        var base = "http://localhost:4030";

        $rootScope.logout = function() {

        };

        return {
            getAllCardList: function() {
                return $http.get(base + CONSTANT.API.GET_ALL_CARD, {
                    method: 'GET'
                });
            }
        }

    });