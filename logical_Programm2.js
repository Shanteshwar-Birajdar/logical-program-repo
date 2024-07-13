
console.log("========== Que 7 ==========");
console.log("========== Reverse method with predefined method ==========");
function reverseMethod(str){
return str.split('').reverse( ).join('');
}
const str = "Software";
console.log(`The reverse of the string '${str}' is : ${reverseMethod(str)}`);
const str1 = "UI Developer";
console.log(`The reverse of the string '${str1}' is : ${reverseMethod(str1)}`);

console.log("========== Reverse method without predefined method ==========");
function reverseString(str){
let reverseString = '';
for (let index = str.length - 1; index => 0; index--) {
    reverseString = str1[string];
}
return reverseString ;
}
const string = "Web Developer";
console.log(`The reverse of the string '${string}' is : ${reverseMethod(string)}`);
const string1 = "Billion Dollar";
console.log(`The reverse of the string '${string1}' is : ${reverseMethod(string1)}`);
const string2 = "Java";
console.log(`The reverse of the string '${string2}' is : ${reverseMethod(string2)}`);

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

console.log("========== Que 10 ==========");
console.log(`========== Number of word count in given string ==========`);
function wordCount(str){
    const words = str.split(' ').filter(word => word.length > 0);
      return words.length;
    }
    const strings2 = [ "JavaScript The language of Internet", "Enhance Your Learning Journey with Exclusive Add-ons", 
        "Beyond frameworks, Beyond Imagination", "I am passionate software developer"] ;

        strings2.forEach(str=>{
            console.log(`The no. of word in the string '${str}' is : ${wordCount(str)}`);
         }) ;