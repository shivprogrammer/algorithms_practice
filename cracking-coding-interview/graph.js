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
