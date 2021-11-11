// count occurrences of character in string javascript

function CharacterCountInAString(str, char) {
    if (!str) {
        return;
    }
    var count = str.split(char).length - 1;
    console.log(count);
}

CharacterCountInAString('This is a string','i');
