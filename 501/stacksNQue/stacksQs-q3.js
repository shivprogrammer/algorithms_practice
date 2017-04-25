'use strict';

// HW2: Stacks and Queue Q3: Stack with Max API
// Have an api method in your stack class that returns the Max Integer Value in it.

// this was solved with Thomas

function Stack() {
}

var stack1 = new Stack();
var maxStack = new Stack();

Stack.prototype.maxInt() {
  return maxStack.peek();
}

Stack.prototype.pop() {
  if (maxStack.peek() === stack1.peek()) {
    maxStack.pop();
    stack1.pop();
  }
  else {
    stack1.pop();
  }
}

Stack.prototype.push(val) {
  if (maxStack.isEmpty()) {
    maxStack.push(val);
    stack1.push(val);
  }
  if (maxStack.peek() <= val) {
    maxStack.push(val);
    stack1.push(val);
  }
  stack1.push(val);
}
