
console.log("========== Que 5 ==========");
console.log("========== Given string contain UI word ==========");
function containsUI(string){
return string.includes('UI')
}
const string3 = ("React - UI developer");
console.log(`Given string '${string3}' contain word UI => ${containsUI(string3)}`);
const string4 = ("UI developer");
console.log(`Given string '${string4}' contain word UI => ${containsUI(string4)}`);
const string5 = ("Front end and backend technologies");
console.log(`Given string '${string5}' contain word UI => ${containsUI(string5)}`);
const string6 = ("MEAN or MERN - UI developer");
console.log(`Given string '${string6}' contain word UI => ${containsUI(string6)}`);