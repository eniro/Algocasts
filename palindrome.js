// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversed = str.split('').reverse().join('');

    return str === reversed;

}

module.exports = palindrome;

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');

//     return str === reversed;

// }


// function palindrome(str) {
//     return str.split('').every((char, index) => {
//         return char === str[str.length - index - 1];
//     });

// }

// function palindrome(str) {
//     arr1 = str.split('');
//     arr2 = arr1.reverse();
//     for(let i = 0; i <= arr1.length; i++) {
//         if(arr2[i] === arr1[arr1.length - i - 1]) {
//             return true;
//         } else {
//             return false;
//         }
            
//     }

// }
