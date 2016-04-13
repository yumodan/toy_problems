function BinaryHeap () {
  //this code is messy but it's mine so it's good
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

BinaryHeap.prototype.bubbleUp = function(index, fn){
  //must be called on a parent node
  //second parameter is bool. true to bubble up false to bubble down
  let temp;
  let rightIndex = this.rightChild(index);
  let leftIndex = this.leftChild(index);
  let bool = this._compare(this._heap[rightIndex], this._heap[index]);
  bool = bool || this._compare(this._heap[leftIndex], this._heap[index])

  //variable bool checks the node at index index is greater than its child nodes
  //if it is greater than its child nodes
    //swap with smallest child node
    //if you want to bubble down call the bubbleUP function recursively on the index of the smaller child node
    //if you want to bubble up call the bubbleUp  function recursively on the parent node

  if(bool){
    if (this._compare(this._heap[leftIndex], this._heap[rightIndex])){
      if(this._heap[leftIndex]){
        swap(index, leftIndex, this._heap);
        fn === false ? fn = this.leftChild : fn = this.parent;
        this.bubbleUp(fn(index));
      }
    }else{
      if(this._heap[rightIndex]){
        swap(index, rightIndex, this._heap);
        fn === false ? fn = this.rightChild : fn = this.parent;
        this.bubbleUp(fn(index));
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