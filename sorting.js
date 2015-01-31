function bubbleSort (arr) {

  var swaps;

  while (swaps != 0) {
    swaps = 0;
    for (var i=0; i<arr.length-1; i++) {
      var first = arr[i];
      var second = arr[i+1];
      if (second < first) {
        arr[i] = second;
        arr[i+1] = first;
        swaps++;
      } 
    }
 }

  return arr;
}

function merge (left, right) {
  var resultArr=[];


  while (left.length > 0 || right.length > 0) {
    if (left.length === 0 && right.length > 0) {
      return resultArr.concat(right);
    } else if (left.length > 0 && right.length === 0) {
      return resultArr.concat(left);
    } else { 
      if (left[0] <= right[0]) {
        resultArr.push(left.shift());
      } else {
        resultArr.push(right.shift());
      }
    }
  }

  return resultArr;
}

function split (arr) {
  var returnArr=[];
  if (arr.length === 1) {
    return [[], arr];
  }
  var arrLength = Math.floor(arr.length/2);

  // with slice
  // var left = arr.slice(0, arrLength);
  // returnArr.push(left);

  // var right = arr.slice(arrLength);
  // returnArr.push(right);
  // return returnArr;

  // alternative
  var right=arr.splice(arrLength);
  return [arr, right];

}

function mergeSort (arr) {
  if (arr.length === 1) {
    return arr;
  }

  var splitArr = split(arr);
  var left = splitArr[0];
  var right = splitArr[1];

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}