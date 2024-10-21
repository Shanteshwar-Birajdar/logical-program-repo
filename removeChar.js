function removeChar(str, charToRemove){
    const regex = new RegExp(charToRemove, 'g');
    return str.replace(regex, '');
}
const pairs = [
    ["Java@Script", '@'],
    ["Softyware",'y'],
    ["Code Mind", ' ']
];

pairs.forEach(pair => {
    const str = pair[0];
    const charToRemove = pair[1];
    const result = removeChar(str, charToRemove);
    console.log(`Original String : "${str}", Remove "${charToRemove}" : "${result}"`);
});