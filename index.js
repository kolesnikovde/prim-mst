'use strict';

var DHeap = require('d-heap');

module.exports = function(edges) {
  var mst = [],
      nodes = [],
      queue,
      edge, node, adjacent, v, u, w, vn, un, i, l;

  for (i = 0, l = edges.length; i < l; ++i) {
    edge = edges[i];
    v = edge[0];
    u = edge[1];
    w = edge[2];

    vn = nodes[v] ||
      (nodes[v] = { v: v, w: Infinity, p: null, visited: false, adjacent: [] });
    un = nodes[u] ||
      (nodes[u] = { v: u, w: Infinity, p: null, visited: false, adjacent: [] });

    vn.adjacent[u] = w;
    un.adjacent[v] = w;
  }

  queue = new DHeap([nodes[edges[0][0]]], {
    compare: function(a, b) {
      return (b != null ? b.w : 0) - (a != null ? a.w : 0);
    }
  });

  while (v = queue.pop()) {
    v.visited = true;
    adjacent = v.adjacent;

    for (i = 0, l = adjacent.length; i < l; ++i) {
      w = adjacent[i];
      if (!w) continue;
      u = nodes[i];

      if (!u.visited && w < u.w) {
        u.w = w;
        u.p = v;
        queue.insert(u);
      }
    }
  }

  for (i = 0, l = nodes.length; i < l; ++i) {
    node = nodes[i];

    if (node.p) {
      mst.push([node.v, node.p.v, node.w]);
    }
  }

  return mst;
};
