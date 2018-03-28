function insertionSort(numArray) {
  for (var i = 0; i < numArray.length; i++) {
    let value = numArray[i];
    
    for (var j = i - 1; j > -1 && numArray[j] > value; j--) {
      numArray[j + 1] = numArray[j];
    }
    numArray[j + 1] = value;
  }

  return numArray;
}

module.exports = insertionSort;