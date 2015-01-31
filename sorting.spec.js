describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one element', function () {
    expect(bubbleSort([4])).toEqual([4]);
  });

  it('sorts an array properly', function () {
    expect(bubbleSort([5,3,20])).toEqual([3,5,20]);
    expect(bubbleSort([32, 5, 8, 1, 16, 7])).toEqual([1, 5, 7, 8, 16, 32]);
  });
})

describe('Merge', function () {
  it('is able to merge two sorted arrays', function () {
    expect(merge([5, 20], [6, 10])).toEqual([5, 6, 10, 20]);
    expect(merge([5, 20, 30, 40, 100], [5, 7, 8, 10])).toEqual([5, 5, 7, 8, 10, 20, 30, 40, 100]);
  })

  it('is able to merge one element arrays', function () {
    expect(merge([5], [4])).toEqual([4, 5]);
  })
})
 
describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([32, 5, 8, 1, 16, 7])).toEqual([[32, 5, 8], [1, 16, 7]]);
  })

  it('is able to take an array with odd number of elements', function () {
    expect(split([32, 5, 8, 1, 16, 7, 50])).toEqual([[32, 5, 8], [1, 16, 7, 50]]);
  })
})

describe('Merge Sort', function () {
 it('sorts odd number of elements', function () {
    expect(mergeSort([5, 3, 20])).toEqual([3,5,20]);
  })

  it('sorts longer arrays', function () {
    expect(mergeSort([32, 5, 8, 1])).toEqual([1, 5, 8, 32]);
    expect(mergeSort([32, 1, 7, 100, 500])).toEqual([1, 7, 32, 100, 500]);
  })
})
