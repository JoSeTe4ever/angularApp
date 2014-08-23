/**
 * Created by josete on 17/08/2014.
 * This is a directive that puts the text of a http
 * component in reverse.
 *
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

    };
});