
(function () {

    'use strict';

    ClientListController.$inject = ['$scope', 'ClientsService', '$routeParams', 'overlayLoadingService'];
    function ClientListController($scope, ClientsService, $routeParams, overlayLoading) {

        var clientListCtrl = this,
            modelList = [];

        init();

        function init() {

            getClientsList();
        }

        function getClientsList(){
          overlayLoading.show();
            ClientsService.getClientsList()
                .then(function(result){
                    if(result.length > 0){
                        clientListCtrl.modelList = result;
                        overlayLoading.hide();
                    }
                })
        }

        function removeClientModal(idClient){
            swal({
              title: "Essa ação não poderá ser desfeita!",
              text: "Tem certeza que deseja excluir esse cliente?",
              icon: "warning",
              buttons: true,
              dangerMode: true
            })
            .then((willDelete) => {
              if (willDelete) {
                overlayLoading.show();
                ClientsService.removeClient(idClient)
                  .then(function(result){
                    if(result){

                      getClientsList();
                      overlayLoading.hide();
                      swal("Cliente deletado com sucesso", {
                        icon: "success",
                      });
                    }
                  })
              } else {
                swal("Usuário não deletado!");
              }
            });
        }

        // exports
        angular.extend(this, {
            /* vars */
            clientListVm:clientListCtrl,
            modelList: modelList,

            removeClientModal:removeClientModal
        });

    }


    angular
        .module('TesteSequenza.client')
        .controller('ClientListController', ClientListController)

})();
