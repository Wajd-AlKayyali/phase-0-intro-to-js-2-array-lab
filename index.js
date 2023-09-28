// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
console.log(cats)

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  let name3 = "Ralph"
function destructivelyAppendCat(name3) {
cats.push(name3)
console.log(destructivelyAppendCat)}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  let name1 = "Bob"
  function destructivelyPrependCat(name1){
  cats.unshift(name1)
  console.log(destructivelyPrependCat)}

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
  function destructivelyRemoveLastCat(){
cats.pop()
console.log(destructivelyRemoveLastCat)
  }
  
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
  function destructivelyRemoveFirstCat(){
cats.shift()
console.log(destructivelyRemoveFirstCat)
  }
  
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

let name = "Broom"
  function appendCat(name){
  let a =[...cats, name]
  console.log(a)
  return a; // without adding return the test won't pass [using only console.log is wrong here]
  console.log(cats)
}

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  let name4 = "Arnold"
  function prependCat(name4){
  let b =[ name4, ...cats,]
  console.log(b)
  return b; // without adding return the test won't pass [using only console.log is wrong here]
  console.log(cats)}

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function removeLastCat(){
let c = cats.slice(0, -1);
return c
}
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function removeFirstCat(){
    let d = cats.slice(1);
    return d
    }
