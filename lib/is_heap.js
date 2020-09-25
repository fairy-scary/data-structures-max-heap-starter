const { MaxHeap } = require("./max_heap");

// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
  if(array.length === 1) {
    return true;
  }
  if (Math.max(...array) === array[idx]) {
    return true
  }

  if(array[idx] !== Math.max(...array)) {
    return false
  }
}


module.exports = {
  isMaxHeap
};
