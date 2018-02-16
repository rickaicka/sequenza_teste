/*
 * Core module
 * Contains third part modules, ng modules and shared modules
 * that are used in all parts of this application
 *
 * Reference: https://github.com/johnpapa/angular-styleguide#modularity
 * */
(function(){
    'use strict';

    angular.module('TesteSequenza.core', [
        'ngRoute',
        'ngMessages',
        'ui.materialize',
        'tableSort',
        'ngMask'
    ])

})();
