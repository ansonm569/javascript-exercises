const reverseString = function(string) {
    strArray = string.split('');
    strReversed = strArray.reverse();
    strReversed = strArray.join("");
    return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
