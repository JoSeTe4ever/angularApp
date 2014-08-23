/**
 * Created by josete on 23/08/2014.
 */

describe('sandBoxController', function () {
    describe('data', function () {
        var sandBoxCtrl, $location, $scope, $http;

        beforeEach(module('ngBoilerplate'));

        beforeEach(inject(function ($controller, _$location_, $rootScope, _$http_) {
            $location = _$location_;
            $scope = $rootScope.$new();
            $http = _$http_;
            sandBoxCtrl = $controller('sandBoxController', { $location: $location, $scope: $scope, $http: $http });
        }));

        it('should contain data', inject(function () {
            // todo mock Http call

            console.log($scope);
            dump($scope);
        }));
    });

});

