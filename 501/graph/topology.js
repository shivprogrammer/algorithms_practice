'use strict';

function Graph(node) {
  this.root = node;
}

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function preOrder(node){
  console.log(node.val);
  if(node.left) preOrder(node.left);
  if(node.right) preOrder(node.right);
}
function inOrder(node){
  if(node.left) inOrder(node.left);
  console.log(node.val);
  if(node.right) inOrder(node.right);
}
function postOrder(node){
  if(node.left) postOrder(node.left);
  if(node.right) postOrder(node.right);
  console.log(node.val);
}

var funGraph = new Graph(new Node(10));

funGraph.root.left = new Node(6);
funGraph.root.left.left = new Node(4);
funGraph.root.left.right = new Node(8);
funGraph.root.left.left.left = new Node(12);
funGraph.root.left.left.right = new Node(29);
funGraph.root.left.right.left = new Node(1);
funGraph.root.left.right.right = new Node(42);

funGraph.root.right = new Node(18);
funGraph.root.right.left = new Node(5);
funGraph.root.right.right = new Node(21);
funGraph.root.right.right.right = new Node(4);
funGraph.root.right.right.left = new Node(11);
funGraph.root.right.left.right = new Node(44);
funGraph.root.right.left.left = new Node(22);

console.log(preOrder(funGraph.root));
console.log(inOrder(funGraph.root));
console.log(postOrder(funGraph.root));

function topology(funGraph) {
  console.log(preOrder(funGraph.root));
  console.log(inOrder(funGraph.root));
  console.log(postOrder(funGraph.root));
}
