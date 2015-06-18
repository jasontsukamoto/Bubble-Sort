function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Parameter must be an array');
  }

  var first;
  var second;
  var count = 0;

  for (var j = 0; j < arr.length; j++) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        first = arr[i];
        second = arr[i + 1];
        arr[i] = second;
        arr[i + 1] = first;
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  bubbleSort : bubbleSort
};
