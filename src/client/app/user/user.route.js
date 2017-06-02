(function() {
    'use strict';

    angular.module('app.user')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'anonymous',
            config: {
                url: '/',
                templateUrl: 'app/user/anonymous/landingpage.html',
                controller: 'UserController',
                controllerAs: 'vm',
                title: 'Inprotech'
            }
        }, {
            state: 'anonymous.register',
            config: {
                url: 'register',
                templateUrl: 'app/user/anonymous/register.html',
                title: 'Register'
            }
        }, {
            state: 'anonymous.login',
            config: {
                url: 'login',
                templateUrl: 'app/user/anonymous/login.html',
                title: 'Login'
            }
        }];
    }
})();