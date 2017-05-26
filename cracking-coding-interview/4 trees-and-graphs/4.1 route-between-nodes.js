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

  var nextEdge1;
  var nextEdge2;
  while (!q1.isEmpty() || !q2.isEmpty()) {
    if (q1.isEmpty()) {
      nextEdge1 = q1.remove();
      if (nextEdge1 === node2) {
        return true;
      }
      if (visted1[nextEdge1] === undefined) {
        visited1[nextEdge1] = true;
        if(graph.hasNode(nextEdge1)) {
          for (var edge in graph.findEdges(nextEdge1)) {
            q1.add(edge);
          }
        }
      }
    }
    if (!q2.isEmpty()) {
      nextEdge2 = q2.remove();
      if (nextEdge2 === ndoe1) {
        return true;
      }
      if (visited2[nextEdge2] === undefined) {
        visted2[nextEdge2] = true;
        if (graph.hasNode(nextEdge2)) {
          for (var edge in graph.findEdges(nextEdge2)) {
            q2.add(edge);
          }
        }
      }
    }
  }

  return false;
}

var graph = new Graph();
