'use strict';

// ROUTE BETWEEN NOTES -- Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

var Graph = require('../Graph');
var Queue = require('../Queue');

function checkRoute(node1, node2, graph) {
  var q1 = new Queue();
  var q2 = new Queue();
  var visited1 = {};
  var visited2 = {};
  visited1[node1] = true;
  visited2[node2] = true;
  if (graph.hasNode(node1)) {
    for (var edge in graph.findEdges(node1)) {
      q1.add(edge);
    }
  }

  if (graph.hasNode(node2)) {
    for (var edge in graph.findEdges(node2)) {
      q2.add(edge);
    }
  }
}
