console.log("========== Que 1 ==========");
console.log("========== Length of given string ==========");
const str = "Hello world!";
const length = str.length;
console.log(`The length of given string '${str}' is : ${length}`);
const str1 = "JavaScript is the language of Internet";
const length1 = str1.length;
console.log(`The length of given string '${str1}' is : ${length1}`);

console.log("========== Que 2 ==========");
console.log("========== Last char of given string ==========");
function lastChar(str){
    return str.charAt(str.length-1);
}
const string = ("Hey, my friend, Programming Language");
console.log(`Last char of given string '${string}' is : ${lastChar(string)}`);
const string1 = ("I am learning logical programs");
console.log(`Last char of given string '${string1}' is : ${lastChar(string1)}`);
const string2 = ("Angular");
console.log(`Last char of given string '${string2}' is : ${lastChar(string2)}`);

console.log("========== Que 3 ==========");
console.log("========== First char of given string ==========");
function firstChar(str){
return str.charAt(0)
}
const str2 = ("React");
console.log(`First char of given string '${str2}' is : ${firstChar(str2)}`);
const str3 = ("Elon Musk");
console.log(`First char of given string '${str3}' is : ${firstChar(str3)}`);
const str4 = ("Apple founder is Stew Job");
console.log(`First char of given string '${str4}' is : ${firstChar(str4)}`);

console.log("========== Que 4 ==========");
console.log("========== Capitalization of of given string ==========");


console.log("========== Que 5 ==========");
console.log("========== Given string contain UI word ==========");
function containsUI(string){
return string.includes('UI')
}
const string3 = ("React - UI developer");
console.log(`Given string '${string3}' contain word UI : ${containsUI(string3)}`);
const string4 = ("UI developer");
console.log(`Given string '${string4}' contain word UI : ${containsUI(string4)}`);
const string5 = ("Front end and backend technologies");
console.log(`Given string '${string5}' contain word UI : ${containsUI(string5)}`);
const string6 = ("MEAN or MERN - UI developer");
console.log(`Given string '${string6}' contain word UI : ${containsUI(string6)}`);

console.log("========== Que 6 ==========");
console.log("========== Split substring into an Array ==========");
function splitString(str,delimiter){
return str.split(delimiter);
}
const str5 = "apple,orange,banana";
const result1 = splitString(str5,',')
console.log(`The array of substring from '${str5}' is : `,result1);

const str6 = "Stew,Bill,,Jenny,Elon";
const result2 = splitString(str6,',')
console.log(`The array of substring from '${str6}' is : `,result2);

const str7 = "Rupees,Dollar,Krone,Pound,Dinner";
const result3 = splitString(str7,',')
console.log(`The array of substring from '${str7}' is : `,result3);

console.log(`========== END ==========`);