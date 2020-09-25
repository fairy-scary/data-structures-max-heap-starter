class MaxHeap {
  constructor(){
    this.array = [null]
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2
  }

  getRightChild(idx) {
    return idx * 2 + 1
  }

  siftUp(idx) {
    if (idx === 1) return
    let parent = Math.floor(idx / 2);

    if(this.array[idx] > this.array[parent]) {
      [this.array[idx] , this.array[parent]] =
      [this.array[parent] , this.array[idx]]
      this.siftUp(parent)
    }
  }

  insert(val) {
    this.array.push(val)
    this.siftUp(this.array.length-1)
  }

  siftDown(idx) {
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let arr = this.array;
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];
    let val = arr[idx];

    if(leftVal === undefined) leftVal = -Infinity;
    if(rightVal === undefined) rightVal = -Infinity;

    if(val > leftVal && val > rightVal) return;

    let swapIdx;

    if(leftVal > rightVal) {
      swapIdx = leftIdx
    } else {
      swapIdx = rightIdx
    }
    [ arr[swapIdx], arr[idx] ] = [ arr[idx], arr[swapIdx] ]
    this.siftDown(swapIdx);
  }

  deleteMax() {
    if (this.array.length === 1) return null;
    if (this.array.length === 2) {
      let root = this.array[1];
      this.array.pop()
      return root;
    } 
    let max = this.array[1];
    this.array[1] = this.array.pop()
    this.siftDown(1);
    return max;
  }



}

module.exports = {
  MaxHeap
};
