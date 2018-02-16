/*
* The directive to block the page when needed
* */
(function () {
    'use strict';
    function overlayLoading(){
        // DI
        overlayLoadingCtrl.$inject = ['overlayLoadingService'];
        function overlayLoadingCtrl(overlayLoadingService){
            // getting the model from the service
            var model = overlayLoadingService.model;
            // and making it available in the model
            angular.extend(this, {
                model : model
            });
        }

        // the directive config
        return {
            restrict : 'E', // elements only
            controller : overlayLoadingCtrl,
            controllerAs : 'overlayVm',
            templateUrl : 'application/directives/overlayLoading/overlayLoading.partial.html'
        }
    }
    angular
        .module('TesteSequenza.core')
        .directive('overlayLoading', overlayLoading);
})();
