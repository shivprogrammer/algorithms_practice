// RETURN KTH TO LAST -- Implement an algorithm to find the kth to last element of a singly linked list.

function LinkedList(node) {
  this.head = node;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

function kToLast(list, k) {
  var p1 = list.head;
  var p2 = list.head;

  for (var i = 0; i < k; i++) {
    if (p1 === null) return null;
    p1 = p1.next;
  }

  while (p1 != null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
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

console.log(kToLast(fun, 2));
