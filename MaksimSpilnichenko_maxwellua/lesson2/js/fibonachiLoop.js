function fiboLoop(itemNumber) {
  var itemPrev = 1,
	  itemLast = 1;
  var fiboArray = [itemPrev,itemLast];
  for (var i = 3; i <= itemNumber; i++) {
    var itemNew = itemPrev + itemLast;
    itemPrev = itemLast;
    itemLast = itemNew;
	fiboArray.push(itemNew);
  }
  
  return fiboArray;
}

console.log(fiboLoop(24));