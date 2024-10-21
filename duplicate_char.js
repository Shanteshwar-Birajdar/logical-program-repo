function duplicateCharCount(str) {
const CharCount = {};
for (let index = 0; index < str.length; index++) {
    const char = str [index];
    if (char !== ' ') {
      CharCount[char] = (CharCount[char] || 0) + 1;
    }
  }
  for (const char in CharCount){
    if (CharCount[char] > 1 ){
        console.log(`${char} - ${CharCount[char]}`);   
    }
  }
}
const strings = ["Banana", "Apple", "Software Developer"]
strings.forEach(str => {
  console.log(`Duplicate character in the string ${str} are :`);
  duplicateCharCount(str);
  console.log('');
});