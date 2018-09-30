var notUniqueArray = [1,56,3,45,6,110,15,24,2,1,1,3,15,110,8,16,24];

function uniqueArray(sArr){
  var uArr = [];

  nStep: for (var i = 0; i < sArr.length; i++){
		   var tempItem = sArr[i];
		   for (var j = 0; j < uArr.length; j++){
		     if (uArr[j]==tempItem) continue nStep;    
		   }
		   uArr.push(tempItem);
		 }	  
		 
  return uArr;
}

console.log(notUniqueArray);
console.log(uniqueArray(notUniqueArray));