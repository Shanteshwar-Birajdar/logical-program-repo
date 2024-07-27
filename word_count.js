
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
console.log(`========== END ==========`);
