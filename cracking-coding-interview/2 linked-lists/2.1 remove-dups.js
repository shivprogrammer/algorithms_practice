'use strict';

// REMOVE DUPS: Write code to remove duplicates from an unsorted linked list.

function LinkedList(node) {
  this.head = node;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

var node1 = new Node(10);
var node2 = new Node(15);
var node3 = new Node(7);
var node4 = new Node(10);
var node5 = new Node(13);
var fun = new LinkedList(node1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// have to make sure that the node that is being inputted is the head of a singly linked list.
function removeDups(node) {
  var values = [node.val];
  var prev = node;
  var curr = node.next;
  while (curr) {
    if (values.indexOf(curr.val) !== -1) {
      prev.next = curr.next;
    }
    else {
      values.push(curr.val);
      prev = curr;
    }
    curr = curr.next;
  }
  return values;
}

console.log(removeDups(node1)); // return [10, 15, 7, 13]
