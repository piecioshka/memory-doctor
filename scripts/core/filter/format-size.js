'use strict';

app.filter('formatSize', function () {
    return function (size) {
        if (typeof size === 'number') {
            return size / 1000 / 1000 / 1000 + ' GB';
        } else {
            return size;
        }
    }
});
