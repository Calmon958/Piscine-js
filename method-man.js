const words = (word) => {
    return word.split(' ');
}
const sentence = (word) => {
    return word.join(' ');
}
const yell = (word) => {
    return word.toUpperCase();
}
const capitalize = (words) => {
    if (typeof words === 'string') {
        return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase(); 
    }
    return words.map(word => {
        if (word.length === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
};
const whisper = (word) => {
    return '*' + word.toLowerCase() + '*';
}

console.log(words("Welcome to the kingdom of the gods"));
console.log(sentence(['hey', 'look!', 'Its', 'the', 'Monkey', 'King!!!']));
console.log(yell("Don't You Dare!!"));
console.log(whisper("hey"))
console.log(capitalize(['hey', 'look!', 'Its', 'the', 'Monkey', 'King!!!']));