'use strict';

var S = require ('..');

var eq = require ('./internal/eq');


test ('fromPairs', function() {

  eq (typeof S.fromPairs) ('function');
  eq (S.fromPairs.length) (1);
  eq (String (S.fromPairs)) ('fromPairs :: Foldable f => f (Array2 String a) -> StrMap a');

  eq (S.fromPairs ([])) ({});
  eq (S.fromPairs ([['a', 1], ['b', 2], ['c', 3]])) ({a: 1, b: 2, c: 3});
  eq (S.fromPairs ({x: ['a', 1], y: ['b', 2], z: ['c', 3]})) ({a: 1, b: 2, c: 3});
  eq (S.fromPairs ([['x', 1], ['x', 2]])) ({x: 2});

});
