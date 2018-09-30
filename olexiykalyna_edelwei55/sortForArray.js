var A = [1, 4, 57, 2, 65, 1, 6, 9, 3];
function SelectionSort(A)       // A - массив, который нужно
{                               // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { var min = i;
       for (var j = i+1; j < n; j++)
        { if (A[j] < A[min]) min = j; }
       var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
     }
    return A;    // На выходе сортированный по возрастанию массив A.
}
alert("Отсортированый массив циклом for: " + SelectionSort(A));
