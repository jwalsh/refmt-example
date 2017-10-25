const refmt = require('refmt');
const fs = require('fs');

// console.log(typeof refmt);
const examples = [
  'let    greet    =    fun    name    =>    "Hello "   ^     name;',
  'greet    "world!"    ;     /* "Hello world!" */',
  'let    a   = 1',
  'let add =fun x y  z  => x  + y + z;', // reduces to the following:
  'let add x y z => x + y + z;',
  'add a  /* 1 */2   3     /* 6 */ ',
  `let greetMore = fun name => {
  let part1 = "Hello";
  part1 ^ " " ^ name
};`,
];
// convert the ocaml syntax to reason syntax
examples.map(e => {
  console.log(refmt(e));
});

const myReasonMLCode = fs.readFileSync('file.re');
// const formattedCode = refmt(myReasonMLCode);
