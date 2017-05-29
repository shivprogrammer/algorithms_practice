function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BST(value);
    }
    else  {
      this.left.insert(value);
    }
  }
  else {
    if (this.right === null) {
      this.right = new BST(value);
    }
    else {
      this.right.insert(value);
    }
  }
}

BST.prototype.printLevelOrder = function() {
  var level = [];
  var q = new Queue();
  var nextq = new Queue();
  var currNode;

  q.add(this);
  while (!q.isEmpty()) {
    currNode = q.remove();
    level.push(currNode.value);
  }
}
