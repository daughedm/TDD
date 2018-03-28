const quickSort = array => {
  if (array.length === 0) {
    return array;
  }
  let lessThan = [];
  let greaterThan = [];
  let pivot = array[array.length - 1];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) {
      lessThan.push(array[i]);
    } else { 
      greaterThan.push(array[i]);
    }
  }
  const lowArr = quickSort(lessThan);
  const highArr = quickSort(greaterThan);
  const final = lowArr.concat(pivot, highArr);

  return final;
};

module.exports = quickSort;