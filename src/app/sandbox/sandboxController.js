/**
 * Created by josete on 17/08/2014.
 */

angular.module('ngBoilerplate.sandbox').controller('sandBoxController', function ($scope, $locale, $http) {

    $http.get("js/data.json").success(function (data) {
        $scope.data = data;
        $scope.gridOptions = { data: 'myData' };
    });
});