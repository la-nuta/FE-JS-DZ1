(function () {
    'use strict';

    function printDuplicatedNumbers(...args) {
        let arr1 = [...args],
            counter = 1;
        arr1.sort();
        console.log(arr1.sort());

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr1[i + 1]) {
                counter++;
            } else if (counter > 1) {
                console.log(arr1[i] + ' - ' + counter);
                counter = 1;
            }
        }
    }

}());