/**
 * Created by josete on 17/08/2014.
 */
angular.module( 'ngBoilerplate.sandbox', [
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.accordion'
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'sandbox', {
        url: '/sandbox',
        views: {
            "main": {
                controller: 'sandBoxController',
                templateUrl: 'sandbox/sandbox.tpl.html'
            }
        },
        data:{ pageTitle: 'Josete Sandbox' }
    });
});
