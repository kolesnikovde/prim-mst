# prim-mst

[Prim's MST algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm) implementation.

### Installation

    $ npm i prim-mst

### Usage

```js
var prim = require('prim-mst');

prim([
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
// [
//   [1, 0, 7],
//   [2, 4, 5],
//   [3, 0, 5],
//   [4, 1, 7],
//   [5, 3, 6],
//   [6, 4, 9]
// ]
```

### License

MIT
