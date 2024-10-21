
function swapWords() {
let wordOne = "Angular" ;
let wordTwo = "React" ;
[wordOne, wordTwo] = [wordTwo, wordOne];

console.log(`After Swapping :- `);
console.log(`wordOne : ${wordOne}`);
console.log(`wordTwo : ${wordTwo}`);
}
swapWords();