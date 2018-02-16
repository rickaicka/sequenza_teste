(function(){
    'use strict';

    ClientsService.$inject = ['$http', 'AppConfigs'];
    function ClientsService($http, AppConfigs){

        var model = {
          "nome": null,
          "email": null,
          "endereco": null,
          "bairro": null,
          "cidade": null,
          "estado": null,
          "telefone": null
        };
        function saveClient(data){
            var apiUrl = AppConfigs.apiEndpoint;

            return $http.post(apiUrl+'/api/Cliente', data)
                .then(saveClientSuccess)
                .catch(saveClientFail);

            function saveClientSuccess(response){
                return response.data;
            }
            function saveClientFail(error){
                return error.data;
            }

        }

        function updateClient(clientId, data){
            var apiUrl = AppConfigs.apiEndpoint;

            return $http.put(apiUrl+'/api/Cliente/'+clientId, data)
                .then(updateClientSuccess)
                .catch(updateClientFail);

            function updateClientSuccess(response){
                return response.data;
            }
            function updateClientFail(error){
                return error.data;
            }

        }

        function getClientById(clientId){
            var apiUrl = AppConfigs.apiEndpoint;

            return $http.get(apiUrl+'/api/Cliente/' + clientId)
                .then(getClientByIdSuccess)
                .catch(getClientByIdFail);

            function getClientByIdSuccess(response){
                return response.data;
            }
            function getClientByIdFail(error){
                return error.data;
            }
        }

        function getClientsList(){
            var apiUrl = AppConfigs.apiEndpoint;

            return $http.get(apiUrl+'/api/Cliente')
                .then(getClientsListSuccess)
                .catch(getClientsListFail);

            function getClientsListSuccess(response){
                return response.data;
            }
            function getClientsListFail(error){
                return error.data;
            }

        }

        function removeClient(clientId){
            var apiUrl = AppConfigs.apiEndpoint;

            return $http.delete(apiUrl+'/api/Cliente/' + clientId)
                .then(removeClientSuccess)
                .catch(removeClientFail);

            function removeClientSuccess(response){
                return response.data;
            }
            function removeClientFail(error){
                return error.data;
            }
        }

        // exports
        return {
            /* vars */
            model:model,
            /* methods */
            saveClient : saveClient,
            getClientById: getClientById,
            getClientsList: getClientsList,
            removeClient: removeClient,
            updateClient:updateClient
        };
    }

    angular
        .module('TesteSequenza.client')
        .factory('ClientsService', ClientsService);

})();
