var arr = [6, 4, 4, 7, 6, 8];

function uniqElements (diffArray) {
    var n = diffArray.length, k = 0, SortArr = [];

    for (var i = 0; i < n; i++) {
        var j = 0;
        while (j < k && SortArr[j] !== diffArray[i]) {
            j++;
        }
        if (j == k) {
            SortArr[k++] = diffArray[i];
        }
    }

    return SortArr.sort((a, b) => a - b);
}

console.log(uniqElements(arr));