var assert = require('assert');
var prim = require('./');

describe('prim-mst', function() {
  it('finds MST', function() {
    var result = prim([
      [0, 1, 7],
      [0, 3, 5],
      [1, 2, 8],
      [1, 3, 9],
      [1, 4, 7],
      [2, 4, 5],
      [3, 4, 15],
      [3, 5, 6],
      [4, 5, 8],
      [4, 6, 9],
      [5, 6, 11]
    ]);

    assert.deepEqual(result, [
      [1, 0, 7],
      [2, 4, 5],
      [3, 0, 5],
      [4, 1, 7],
      [5, 3, 6],
      [6, 4, 9]
    ]);
  });
});
