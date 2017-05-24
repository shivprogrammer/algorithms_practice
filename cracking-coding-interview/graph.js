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

Graph.prototype.findEdges = function(node) {
  if (this.nodes[node] === undefined) {
    return 'node does not exist';
  }
  else {
    return this.nodes[node];
  }
}

Graph.prototype.hasNode = function(node) {
  return this.nodes[node] !== undefined;
}

Graph.prototype.removeEdge = function(node, edge) {
  if (this.nodes[node] === undefined) {
    return 'node does not exist';
  }
  else  {
    delete this.nodes[node][edge];
  }
}

Graph.prototype.removeNode = function(node) {
  if (this.nodes[node] === undefined) {
    return 'node does not exist';
  }
  else {
    delete this.nodes[node];
    for (var currNode in this.nodes) {
      if (this.nodes[currNode][node] !== undefined) {
        delete this.nodes[currNode][node]; // something to do with deleting neighboring nodes, still not fully understanding though
      }
    }
  }
}
