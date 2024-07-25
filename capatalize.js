
console.log("========== Que 4 ==========");
console.log("========== Capitalization of of given string ==========");
function titleCase(str) {
return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() 
+ word.slice(1)).join(' ')
}
console.log(titleCase(`language of internet`));
console.log(titleCase(`EloN musk - The tycoon of decade`));
console.log(titleCase(`My Life My Life`));
console.log(titleCase(`logical programming question SET`));