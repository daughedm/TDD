const mergeSort = ((array) => {
  if (array.length <= 1) {
    return array;
  }

  const splitIndex = Math.floor(array.length / 2);
  const left = array.slice(0, splitIndex);
  const right = array.slice(splitIndex);

  const leftMerge = mergeSort(left);
  const rightMerge = mergeSort(right);
  
  return merge(leftMerge, rightMerge);
});

const merge = ((left, right) => {
  let sorted = [];
  
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  sorted.push(...left, ...right);
  return sorted;
});

module.exports = mergeSort;