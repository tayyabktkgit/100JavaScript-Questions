// 13: Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both Lowercase and uppercase).

const countVowels = (str) => {
  let Vowels = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  let count = 0;
  for (let char of arr) {
    if (Vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
};

// Example usage:
console.log(countVowels("Helloo world"));
// Output: 4
console.log(countVowels("ThE quick brown fox"));
// Output: 5
console.log(countVowels("Brrrp")); 
// Output: 0
