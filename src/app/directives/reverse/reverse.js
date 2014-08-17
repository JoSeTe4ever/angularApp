/**
 * Created by josete on 17/08/2014.
 *   (_*_)
 */

angular.module('directives').directive("reverse", function () {
    return {
        restrict: 'E',
        link: function postLink(scope, element) {
            scope.reverseString =  function reverse(s) {
                return s.split('').reverse().join('');
            };

            var myString =  scope.reverseString(element.text());
            element.text(myString);
        }

    }
})