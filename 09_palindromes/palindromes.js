const palindromes = function (string) {
     const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
     const numLetter = string.toLowerCase().split('').filter(chara => alphanumerical.includes(chara)).join();

const reversedString = numLetter.split('').reverse().join('');

return reversedString === numLetter;
};

// Do not edit below this line
module.exports = palindromes;
