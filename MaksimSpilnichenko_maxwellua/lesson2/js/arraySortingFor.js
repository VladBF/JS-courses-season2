var someArray = [1,56,3,45,6,110,15,24,2,1];

function sortThisArray(uArr){
  for (var i = 0; i<uArr.length-1; i++){
	var swapped = false;
	for (var j = 0; j<uArr.length-i; j++){  
		if (uArr[j]>uArr[j+1]){
		  var swap = uArr[j];
		  uArr[j] = uArr[j+1];
		  uArr[j+1] = swap;
		  swapped = true;
		}
	}
	if (!swapped) break;
  } 
  
  return uArr;
}	

console.log(sortThisArray(someArray));