const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const arrayGenerator = require('./../lib/arrayGenerator.js');
const insertionSort = require('./../lib/insertionSort.js');

describe('insertionSort', function () {

  it('should be a function', function () {
    assert.isFunction(insertionSort);
  });

  it('should arrange numbers in an array from lowest to highest.', function () {
    const array = [3, 4, 5, 6, 234, 65, 234, 6432, 53642, 6, 6547, 87, 5689, 78, 6709, 6790, 609];
    const insertionSorted = insertionSort(array);
    const sorted = array.sort();

    assert.equal(insertionSorted, sorted);
  });

  it('should arrange strings in an array in alphabetical order', function () {
    const array = ['the', 'fox', 'brown', 'quick', 'jumped'];
    const insertionSorted = insertionSort(array);
    const sorted = array.sort();

    assert.equal(insertionSorted, sorted);
  });

  it('should arrange a large array of numbers', function () {
    const array = arrayGenerator(500, 100);
    const insertionSorted = insertionSort(array);
    const sorted = array.sort();

    assert.equal(insertionSorted, sorted);
  });
});