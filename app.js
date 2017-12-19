(function () {
    'use strict';

    function printDuplicatedNumbers(...args) {
        let arr1 = [...args],
            checkArr = [];

        for (let i = 0; i < arr1.length; i++) {
            if (!checkArr.some(function (value) {
                    return value === arr1[i];
                })) {
                let counter = arr1.filter(function (value) {
                    return value === arr1[i];
                }).length;
                if (counter > 1) {
                    console.log(arr1[i] + ' - ' + counter);
                }
                checkArr.push(arr1[i]);
            }
        }
    }
}());