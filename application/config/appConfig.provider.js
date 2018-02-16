/**
 * Application general configs provider
 * */
(function(){

    function AppConfigs(){

        // the options object
        var options = {
            activeEnv : "developer", // sets the active env
            developer : {
                apiEndpoint : 'http://build01.sequenza.com.br:9090'
            }
        };

        // sets the active env object to return
        this.$get = [function () {
            var activeOptions = options[options['activeEnv']];
            return activeOptions;
        }];

    }

    // inject the provider in the module
    angular
        .module('TesteSequenza')
        .provider('AppConfigs', AppConfigs);

})();
