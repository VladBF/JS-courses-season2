var someArray = [1,56,3,45,6,110,15,24,2,1];

function sumArray(sArr){
  var sum = 0;
  for (i = 0; i<sArr.length; i++){
	sum += sArr[i];	
  }
  
 return sum; 
}

console.log(sumArray(someArray));