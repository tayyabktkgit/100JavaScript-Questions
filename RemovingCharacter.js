// Remove Character at Specified Position in String
// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

const removeCharacter = (str, position) => {
  // convert the string into arry
  const arr = str.split("");
  // then find the position of the character to be removed
  arr.splice(position, 1);
  // then again join the array into string
  const result = arr.join("");
  console.log(result);
};
removeCharacter("JavaScript", 4);
