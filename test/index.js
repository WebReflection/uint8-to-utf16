const {pack, unpack} = require('../cjs');

const even = new Uint8Array([0, 1, 2, 3]);
const odd = new Uint8Array([0, 1, 2]);

const evenPacked = pack(even);
const oddPacked = pack(odd);

const evenUnpacked = unpack(evenPacked);
const oddUnpacked = unpack(oddPacked);

console.assert(
  JSON.stringify([...evenUnpacked]) === JSON.stringify([...even]),
  'even works'
);

console.assert(
  JSON.stringify([...oddUnpacked]) === JSON.stringify([...odd]),
  'odd works'
);
