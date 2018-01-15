'use strict';

app.controller('MainController', function MainController($scope) {
    var UPDATE_TIME = 1000; // 1 sekunda

    $scope.datetime = new Date();
    $scope.list = [];

    function getLimit() {
        try {
            return performance.memory.jsHeapSizeLimit;
        } catch (ignore) {
            return '-not available-';
        }
    }

    function getUsed() {
        try {
            return performance.memory.usedJSHeapSize;
        } catch (e) {
            return '-not available-';
        }
    }

    function getTotal() {
        try {
            return performance.memory.totalJSHeapSize;
        } catch (ignore) {
            return '-not available-';
        }
    }

    var ua = {
        label: 'User-Agent',
        value: navigator.userAgent,
        type: 'info'
    };

    var limit = {
        label: 'Memory: Heap Size Limit',
        value: getLimit(),
        type: 'danger'
    };

    var used = {
        label: 'Memory: Used Heap Size',
        value: getUsed(),
        type: 'danger'
    };

    var total = {
        label: 'Memory: Total Heap Size',
        value: getTotal(),
        type: 'danger'
    };

    function tick() {
        $scope.datetime = new Date();

        limit.value = getLimit();
        used.value = getUsed();
        total.value = getTotal();
    }

    setInterval(function () {
        $scope.$apply(tick);
    }, UPDATE_TIME);

    $scope.list.push(ua, limit, used, total);
});
