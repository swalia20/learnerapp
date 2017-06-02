(function() {
    'use strict';

    angular.module('app.layout')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'portal',
            config: {
                abstract: true,
                url: '/portal',
                templateUrl: 'app/layout/portal.html',
                controller: 'PortalController',
                controllerAs: 'vm',
                title: 'Inprotech'
            }
        }];
    }
})();