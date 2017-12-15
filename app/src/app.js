(function () {
    'use strict';

    angular
        .module('app', ['config'])
        .constant('moment', moment)
        .constant('_', _)
        .run(function ($rootScope, loadingState) {
            $rootScope.loadingState = loadingState;
        })
        .run(function (wsService) {
            wsService.open();
        });
})();