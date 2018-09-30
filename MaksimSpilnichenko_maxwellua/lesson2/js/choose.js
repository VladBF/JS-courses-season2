function addScript(src){
 	  var script = document.createElement('script');
  	  script.src = src;
  	  script.async = false;
   	  document.head.appendChild(script);
	}

var choise = prompt('Your choise:',); 
 	
  switch(choise){

 	case null:
 	  console.log('Cancel');
  	  break;
  	case '1':
  	  addScript("js/fibonachiLoop.js");
  	  break;
  	case '2':
  	 // addScript("js/fibonachiRecursion.js");
  	  alert('Under construction!');
	  break;
  	case '3':
  	  addScript("js/arraySum.js");
  	  break;
  	case '4':
  	  addScript("js/arraySortingSort.js");
  	  break;
  	case '5':
  	  addScript("js/arraySortingFor.js");
  	  break;
  	case '6':
  	  addScript("js/arrayUnique.js");
  	  break;
  	default:
  	  console.log('Something wrong was chosen');
  	  break;
  	}