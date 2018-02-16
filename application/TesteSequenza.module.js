
// creates the main module and inject its dependencies and external modules
angular.module('TesteSequenza', [

        /* shared modules */
        'TesteSequenza.core',

        /* teste module*/
        'TesteSequenza.client'
]).config(function($routeProvider, $locationProvider){

    $routeProvider.when('/', {
        templateUrl:'./application/modules/client/modules/crud_client/partials/client.list.partial.html'
    });

    $routeProvider.when('/clients/list', {
        templateUrl:'./application/modules/client/modules/crud_client/partials/client.list.partial.html'
    });

    $routeProvider.when('/clients/add', {
        templateUrl:'./application/modules/client/modules/crud_client/partials/client.add-edit.partial.html'
    });

    $routeProvider.when('/clients/edit/:idClient', {
        templateUrl:'./application/modules/client/modules/crud_client/partials/client.add-edit.partial.html'
    });

    $routeProvider.otherwise({redirectTo:'/'});

    $locationProvider.hashPrefix('');
});
