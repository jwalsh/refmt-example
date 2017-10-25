const refmt = require('refmt');
const fs = require('fs');

// console.log(typeof refmt);
const examples = [
  'let    greet    =    fun    name    =>    "Hello "   ^     name;',
  'let    a   = 1'
];
// convert the ocaml syntax to reason syntax
examples.map(e => {
  console.log(refmt(e));
});

const myReasonMLCode = fs.readFileSync('file.re');
// const formattedCode = refmt(myReasonMLCode);
