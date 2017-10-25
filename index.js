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
  `
let increment x => x + 1;
let double x => x + x;

let eleven = increment (double 5);
`,

  `
let add x y => x + y;
let double x => x + x;

let addtwo = add double 1;
let three = addtwo 1
`,
  'fun (x: int) => fun (y: int): int => 1;',
  'type foo = int => int => int;',
  'let message = isMorning ? "Good morning!" : "Hello!";',
  `
type intCoordinates = (int, int, int);
let buddy: intCoordinates = (10, 20, 20);
type intCoordinatesAlias = coordinates int;
let buddy: intCoordinatesAlias = (10, 20, 20);
`,
  `
type payload =
| BadResult int

| GoodResult string

| NoResult;
`

];
// convert the ocaml syntax to reason syntax
examples.map(e => {
  console.log(refmt(e));
});

const myReasonMLCode = fs.readFileSync('file.re');
// const formattedCode = refmt(myReasonMLCode);
