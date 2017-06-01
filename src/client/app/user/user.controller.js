(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('UserController', UserController);

    UserController.$inject = ['logger'];
    /* @ngInject */
    function UserController(logger) {
        var vm = this;

        activate();

        function activate() {
            logger.info('Activated landing View');
        }
    }
})();