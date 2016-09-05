angular
    .module('InfobipContentCard')
    .controller('dashboardController', function($rootScope, $scope, API) {
        var vm = $scope;

        vm.$on('$viewContentLoaded', function() {
            API.getAllCardList().success(function(resp) {
                console.log(resp)
                vm.cardItems = resp;
            }).error(function(err) {
                vm.cardItems = [];
            })
        });


    })