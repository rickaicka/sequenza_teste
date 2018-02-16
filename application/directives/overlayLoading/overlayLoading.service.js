(function(){

    'use strict';
    overlayLoadingService.$inject =  ['$timeout'];
    function overlayLoadingService($timeout){

        var model = {
            show : false,
            timeToHide : 0,
            timeToShow : 0
        };

        // exports public stuff
        return {
            /*variables*/
            model : model,
            /*methods*/
            show : show,
            hide : hide
        };

        ////////////////////////////

        /*
        * Shows the overlay element
        * */
        function show(timeToShow){
            // sets the default value for the param
            timeToShow = timeToShow || 0;
            // sets the passed time value to the model
            model.timeToShow = timeToShow;
            // calls the timeout function using the passed time
            $timeout(function(){
                // sets the "show" flag to true
                model.show = true;
                // resets the timeToShow do zero
                model.timeToShow = 0;
            }, model.timeToShow);
        }

        /*
        * Hides the overlya element
        * */
        function hide(timeToHide){
            // sets the default value to the param
            timeToHide = timeToHide || 0;
            // sets the passed time value to the model
            model.timeToHide = timeToHide;
            // calls the timeout function using the passed time
            $timeout(function(){
                // sets the "show" flag to false
                model.show = false;
                // resets the timeToHide to zero
                model.timeToHide = 0;
            }, model.timeToHide);
        }
    }

    angular
        .module('TesteSequenza.core')
        .factory('overlayLoadingService', overlayLoadingService)

})();
