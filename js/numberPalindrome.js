function numberPalindrome(num) {
    let remainder,
        intialNumber,
        final = 0;

    intialNumber = num;

    while (num > 0) {
        remainder = num % 10;
        num = parseInt(num / 10);
        final = final * 10 + remainder;
    }
    if (final === intialNumber) {
        return `The inputed number : ${intialNumber} is Palindrome`;
    }
    return `The inputed number : ${intialNumber} is not a Palindrome`;
}

console.log(numberPalindrome(121));
console.log(numberPalindrome(123));
