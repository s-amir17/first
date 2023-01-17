console.log("hello world");

function count(counter = 0) {
  //   let counter = 0;
  return function () {
    return counter++;
  };
}

let example1 = count();
let example2 = count(10);
console.log(example1());
console.log(example1());
console.log(example1());

console.log(example2());
console.log(example2());
console.log(example2());
