let unSorted = [4, 5, 3, 2, 1];


function insertionSort(numArray) {
  for (var i = 0; i < numArray.length; i++) {
    //loop through the initial array
    // stores the current value of the loop uto be placed later
    let value = numArray[i];
    for (var j = i - 1; j > -1 && numArray[j] > value; j--) {
      // reverse loop through the sorted array
      //stop when the value of the current item is less than the sort
      // copy each item to the next one
      numArray[j + 1] = numArray[j];
    }
    // the last item we've reached should now hold the value of the currently sorted item
    numArray[j + 1] = value;
  }

  return numArray;
}

console.log(insertionSort(unSorted));



module.exports = insertionSort;