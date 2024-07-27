
console.log("========== Que 8 ==========");
console.log(`========== Number of "A" char in given string ==========`);
function charCount(str){
let count = 0;
for (let i = 0; i < str.length; i++) {
if (str[i].toLowerCase()=='a') {
    count++;
}
  }
  return count;
}
const strings = [ "JavaScript", "Do or Die", "learn with us, Job with us", "Empowering Dreams - Guaranteeing Futures", 
     "Anny, My favorite fruit is Apple"]
     strings.forEach(str=>{
        console.log(`The no. of 'a' char in the string '${str}' is : ${charCount(str)}`);
     }) ;
console.log(`========== END ==========`);
