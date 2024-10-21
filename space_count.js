
function spaceCount(str){
    let count = 0;
for (let index = 0; index < str.length; index++) {
    if (str[index] == ' ') {
        count++ ;
    }
  }
  return count;
}
const strings = [
    "Revision is the mother of success" ,
    "JavaScript is the language of internet world"
];

strings.forEach(str => {
    const count = spaceCount(str);
    console.log(`Number of space in ${str} : ${count}`);  
});