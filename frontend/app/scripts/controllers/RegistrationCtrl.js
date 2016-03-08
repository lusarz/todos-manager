(function () {
    'use strict';

    angular.module('app')
        .controller('RegistrationCtrl', RegistrationCtrl);

    RegistrationCtrl.$inject = ['UserDAO'];


    /**
     * @ngdoc function
     * @name app.controller:RegistrationCtrl
     * @description
     * # RegistrationCtrl
     * Controller of the app
     */
    function RegistrationCtrl(UserDAO) {
        var vm = this;
        vm.registrationData = {};

        vm.register = register;


        function register() {
            UserDAO.register(vm.registrationData).then(function (response) {
                console.log(response);
            });
        }
    }
})();
