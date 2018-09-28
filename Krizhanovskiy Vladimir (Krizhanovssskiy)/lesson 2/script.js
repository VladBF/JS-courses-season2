window.onload = function () {
    const sumArr = [2, 4, 5, 9, 21];
    
    function sum(elem) {
        let result = 0;
        for (let i = 0; i < elem.length; i++) {
            result += elem[i];
        }
        return result;
    }
    console.log('Сума масива sumArr - ' + sum(sumArr));


};