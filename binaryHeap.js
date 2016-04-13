function BinaryHeap () {
  //THIS IS FOR A MIN HEAP
  this._heap = [];
  this._compare = function (i, j) { return i < j };
}

BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}
BinaryHeap.prototype.insert = function (value) {
  this._heap.push(value);
  this.bubbleUp(this.parent(this._heap.length - 1));
}
BinaryHeap.prototype.removeRoot = function () {
  swap(this._heap.length - 1, 0, this._heap);
  let temp = this._heap.pop()
  this.bubbleUp(0, false); //this will actually bubble down bc of the second param
  return temp;
}

BinaryHeap.prototype.parent = function(index) { return Math.floor((index - 1)/2);}
BinaryHeap.prototype.rightChild = function(index) { return (2 * (index+1));}
BinaryHeap.prototype.leftChild = function(index) {return (2 * (index) + 1);}

BinaryHeap.prototype.isOutOfPlace = function(rightIndex, leftIndex, index) {
  return this._heap[rightIndex] < this._heap[index] || this._heap[leftIndex] < this._heap[index];
}

BinaryHeap.prototype.bubbleUp = function(index, up){
  //if you want to bubble up index must be the parent node
  //second parameter is bool. true to bubble up false to bubble down
  let rightIndex = this.rightChild(index);
  let leftIndex = this.leftChild(index);
  let is = this.isOutOfPlace(rightIndex, leftIndex, index);
  let i;

  //variable is checks the node at index index is greater than its child nodes
  //if it is greater than its child nodes
    //swap with smallest child node
    //if you want to bubble down call the bubbleUP function recursively on the index of the smaller child node
    //if you want to bubble up call the bubbleUp  function recursively on the parent node

  if(is){
    if (this._heap[leftIndex] < this._heap[rightIndex]){ //if this._heap[leftIndex or rightIndex] is undefined it will fall into the else statement
      swap(index, leftIndex, this._heap);
      up === false ? i = this.leftChild(index) : i = this.parent(index)
      this.bubbleUp(i);
    }else{
      if(this._heap[rightIndex]){ //make sure we are not accessing null values
        swap(index, rightIndex, this._heap);
        up === false ? i = this.rightChild(index) : i = this.parent(index);
        this.bubbleUp(i);
      }
    }
  }
    
}

function swap(x, y, array) {
//swap array values
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}