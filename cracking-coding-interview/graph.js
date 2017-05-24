'use strict';

var Graph = function() {
  this.nodes = {};
}

Graph.prototype.addEdge = function(node, edge) {
  if (this.nodes[node] === undefined) {
    return 'node does not exist';
  } else if (this.node[node][edge]) {
    return `edge from ${node}-${edge} already exists`;
  } else {
    this.nodes[node][edge] = true
  }
}

Graph.prototype.addNode = function(value) {
  if (this.nodes[value] !== undefined) {
    return 'there is already a node with value ${value}';
  }
  else {
    this.nodes[value] = {}; // I'm uncertain as to why you would want to set this as an empty object
  }
}
