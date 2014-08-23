/**
 * Created by josete on 23/08/2014.
 */

describe('sandBoxController', function () {
    describe('data', function () {
        var AppCtrl, $location, $scope;

        beforeEach(module('ngBoilerplate'));

        beforeEach(inject(function ($controller, _$location_, $rootScope) {
            $location = _$location_;
            $scope = $rootScope.$new();
            AppCtrl = $controller('AppCtrl', { $location: $location, $scope: $scope });
        }));

        it('should pass a dummy test', inject(function () {
            expect(AppCtrl).toBeTruthy();
        }));
    });
});

