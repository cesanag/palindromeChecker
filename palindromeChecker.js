const checkIfPalindrome = (string) => {
  var reversedString = string.split("").reverse().join("").toLowerCase();
  if (string.toLowerCase() === reversedString) {
    console.log(`The word ${string.toLowerCase()} is a palindrome`);
    return true;
  } else {
    console.log(`The word ${string.toLowerCase()} is NOT a palindrome`);
    return false;
  }
};
checkIfPalindrome("itopinonavevanonipoti");
