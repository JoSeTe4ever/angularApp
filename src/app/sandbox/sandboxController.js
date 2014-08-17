/**
 * Created by josete on 17/08/2014.
 */

angular.module('ngBoilerplate.sandbox').controller('sandBoxController', function ($http) {

     $http.get("js/data.json").success(function(data) {
        $scope.data = data;
    });



});