
console.log("========== Que 9 ==========");
console.log(`========== Number of Vowels in given string ==========`);
function vowelsCount(str){
let count = 0;
const vowels = "aeiouAEIOU";
for (let index = 0; index < str.length; index++) {
    if (vowels.includes(str[index])) {
        count++
    }
  }
  return count;
}
let strings1 = [ "JavaScript", "HTML and CSS", "Language Of Internet", 
    "I am UI Developer", "Do or Die"] ;
    strings1.forEach(str=>{
        console.log(`The no. vowels in the string '${str}' is : ${vowelsCount(str)}`);
     }) ;
console.log(`========== END ==========`);
