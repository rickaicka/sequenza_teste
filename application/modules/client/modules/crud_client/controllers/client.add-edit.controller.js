
(function () {

    'use strict';

    ClientAddEditController.$inject = ['$scope', 'ClientsService', '$routeParams', 'overlayLoadingService'];
    function ClientAddEditController($scope, ClientsService, $routeParams, overlayLoading) {

        var clientAddEditVm = this,
            modelList = [];
        clientAddEditVm.client =  angular.copy(ClientsService.model);
        clientAddEditVm.clientId = $routeParams.idClient;

        init();

        function init() {
          if(clientAddEditVm.clientId){
            getClientById(clientAddEditVm.clientId);
          }
        }

        function getClientById(clientId){

          overlayLoading.show();
          ClientsService.getClientById(clientId)
            .then(function(result){
              if(result){
                clientAddEditVm.client = result;
                overlayLoading.hide();
              }
            })
        }
        function save(){
          overlayLoading.show();

          if (clientAddEditVm.clientForm.$invalid) {
              angular.forEach(clientAddEditVm.clientForm, function (field) {
                  if (typeof field === 'object' && field.hasOwnProperty('$modelValue')) {
                      if (field.$invalid) {
                        field.$setTouched();
                        field.$setDirty();
                        $("."+field.$name+" .error-input").css('display','block');
                        $("#"+field.$name).addClass("invalid");
                      }else{
                        $("#"+field.$name).removeClass("invalid");
                        $("#"+field.$name).addClass("valid");
                      }
                  }
              });
              overlayLoading.hide();
              return false;
          }

          if(!clientAddEditVm.clientId){
            ClientsService.saveClient(clientAddEditVm.client)
              .then(function(result){
                if(result){
                  swal("Cliente salvo!", "", "success");
                  overlayLoading.hide();
                }
              });
          }else{
            ClientsService.updateClient(clientAddEditVm.clientId, clientAddEditVm.client)
              .then(function(result){
                if(result){
                    swal("Cliente atualizado com sucesso!", "", "success");
                    overlayLoading.hide();
                  }
              })
          }
        }

        // exports
        angular.extend(this, {
            /* vars */
            clientAddEditVm: clientAddEditVm,
            modelList: modelList,

            save:save
        });

    }


    angular
        .module('TesteSequenza.client')
        .controller('ClientAddEditController', ClientAddEditController)

})();
