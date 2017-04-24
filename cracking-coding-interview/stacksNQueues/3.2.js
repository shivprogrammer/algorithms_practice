// 3.2 - How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop, and min should all operate in O(1) time.

function Stack() {
}

var stack1 = new Stack();
var minStack = new Stack();

Stack.prototype.min() {
  return minStack.peek();
}

Stack.prototype.pop() {
  if (minStack.peek() === stack1.peek()) {
    minStack.pop();
    stack1.pop();
  }
  else {
    stack1.pop();
  }
}

Stack.prototype.push(val) {
  if (minStack.isEmpty()) {
    minStack.push(val);
    stack1.push(val);
  }
  if (minStack.peek() >= val) {
    minStack.push(val);
  }
  stack1.push(val);
}
