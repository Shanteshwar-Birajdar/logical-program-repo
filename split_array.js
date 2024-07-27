
console.log("========== Que 6 ==========");
console.log("========== Split substring into an Array ==========");
function splitString(str,delimiter){
return str.split(delimiter);
}
const str5 = "apple,orange,banana";
const result1 = splitString(str5,',')
console.log(`The array of substring from '${str5}' is : `,result1);

const str6 = "Stew,Bill,Jenny,Elon";
const result2 = splitString(str6,',')
console.log(`The array of substring from '${str6}' is : `,result2);

const str7 = "Rupees,Dollar,Krone,Pound,Dinner";
const result3 = splitString(str7,',')
console.log(`The array of substring from '${str7}' is : `,result3);
console.log(`========== END ==========`);
