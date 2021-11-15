function stringPalindrome(str) {
    if (!str) {
        return null;
    }
    const len = str.length;
    for (let i = 0; i < len / 2; i += 1) {
        if (str[i] !== str[len - 1 - i]) {
            return `The given string : ${str} is not a Palindrome`;
        }
    }
    return `The given string : ${str} is a Palindrome`;
}

console.log(stringPalindrome('amma'));
console.log(stringPalindrome('amar'));
